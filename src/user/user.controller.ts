import { Body, Controller, Get, HttpStatus, NotAcceptableException, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Users } from '../user/entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { ConfigService } from '@nestjs/config';
import { MailService } from '../mail/mail.service';

@Controller('api/v1/user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly mailService: MailService,
        private configService: ConfigService,
    ) { }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get("/region")
    findByRegion() {
        return this.userService.groupByRegion();
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<Users> {
        return await this.userService.findById(params.id);
    }

    @Get('genre/:id')
    async findGenre(@Param() params): Promise<Users> {
        return await this.userService.getGenre(params.id);
    }


    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async Update(@Param() id: number, @Body() data: Users) {
        try {
            await this.userService.update(id, data);
            return {
                status: HttpStatus.OK,
                message: 'Updated successfully',
            };
        } catch (error) {
            return {
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            };
        }
    }

    @Put(':id/change-password')
    async changePassword(@Param('id') id: number, @Body() body: Users) {
        const hashedPassword = await bcrypt.hash(body.password, 12);
        const data = { ...body, password: hashedPassword };
        try {
            await this.userService.update(id, data);
            return {
                statusCode: HttpStatus.OK,
                message: 'Updated successfully',
            };
        } catch (error) {
            return {
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            };
        }
    }

    @Post('reset-password')
    async resetPassword(@Body() { email }) {
        const user = await this.userService.getByEmail(email);
        try {
            if (user) {
                const payload = { id: user.id, email: user.email }
                const token = this.jwtService.sign(payload, {
                    secret: this.configService.get('jwt.secret'),
                    expiresIn: `3600s`
                });
                const url = `${this.configService.get('base_url')}/reset-password/?token=${token}`;
                const mail = await this.mailService.sendResetPassword(user.email, user.firstname, url);
                console.log("mail:", mail)
                return mail
            } else {
                return {
                    status: HttpStatus.BAD_REQUEST,
                    message: "Ce compte n'existe pas",
                };
            }
        } catch (error) {
            console.log("error:", error)

        }
    }

    @Post('check-token')
    async checkToken(@Body() { token }) {
        try {
            const resp = await this.jwtService.verify(token, {
                secret: this.configService.get('jwt.secret'),
            });
            return {
                statusCode: HttpStatus.OK,
                message: resp,
            };
        } catch (error) {
            throw new NotAcceptableException(error);
        }
    }

    @Get('/search-user')
    async search(@Param() params, @Request() req) {
        console.log("params ####")
    }
}
