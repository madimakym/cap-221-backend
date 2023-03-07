import { Controller, Post, UseGuards, Body, NotAcceptableException, BadRequestException, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('api/v1/auth/')
export class AuthController {
    constructor(private authService: AuthService) { }

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

    @Get()
    @UseGuards(JwtAuthGuard)
    async authenticate(@Req() request) {
        const resp = await this.authService.getByToken(request.user.id)
        resp.password = undefined;
        return resp;
    }
}