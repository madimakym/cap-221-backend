import { Controller, Post, UseGuards, Body, NotAcceptableException, BadRequestException, Get, Req, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from '../user/user.service';

@Controller('api/v1/auth/')
export class AuthController {
    constructor(
        private authService: AuthService,
        private readonly userService: UserService,
    ) { }

    @Post('register')
    async signup(@Body() user: Users) {
        console.log(user);
        const resp = await this.authService.getByEmail(user.email);
        if (resp) {
            throw new NotAcceptableException("Adresse email existante");
        } else {
            return this.authService.signup(user);
        }
    }

    @Post('register/check')
    async signupCheck(@Body() user: Users) {
        console.log(user);
        const resp = await this.authService.getByEmail(user.email);
        if (resp) {
            throw new NotAcceptableException("Adresse email existante");
        } else {
            return false;
        }
    }

    @Post('login')
    async login(@Body() user) {
        const resp = await this.authService.getByEmail(user.email);
        if (!resp) {
            throw new NotAcceptableException("Cet utilisateur n'existe pas!");
        }
        if (!(await bcrypt.compare(user.password, resp.password))) {
            throw new BadRequestException('Mot de passe incorrect!');
        }
        return this.authService.login(resp);
    }

    @Post('check-user')
    async check_user(@Body() user) {
        const resp = await this.userService.getByEmail(user.email);
        if (resp) {
            resp.password = undefined;
            return {
                status: HttpStatus.OK,
                message: resp,
            };
        } else {
            throw new NotAcceptableException("Cet utilisateur n'existe pas!");
        }
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async authenticate(@Req() request) {
        const resp = await this.authService.getByToken(request.user.id)
        resp.password = undefined;
        return resp;
    }
}