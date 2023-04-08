import { HttpStatus } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class MailService {
    private mailerService;
    private configService;
    private readonly jwtService;
    constructor(mailerService: MailerService, configService: ConfigService, jwtService: JwtService);
    sendCheck(): Promise<any>;
    sendAuthConfirmCode(code: any, email: any): Promise<any>;
    sendVerificationLink(firstname: string, lastname: string, email: string): Promise<any>;
    confirmEmail(email: string): Promise<void>;
    decodeConfirmationToken({ token }: {
        token: any;
    }): Promise<void>;
    sendConfirm({ to, firstname, lastname }: {
        to: any;
        firstname: any;
        lastname: any;
    }): Promise<any>;
    sendSubscriptionTrialEnding(user: any, url: any): Promise<any>;
    sendSubscriptionStarting(user: any, url: any): Promise<any>;
    sendReportsToPartner(partner: any, url?: any): Promise<any>;
    sendOrder(orderData: any): Promise<any>;
    sendConfirmOrder(orderData: any): Promise<any>;
    sendConfirmAdmin(): Promise<void>;
    sendAppointment(data: any): Promise<any>;
    sendResetPassword(to: any, firstname: any, url: any): Promise<{
        status: HttpStatus;
        message: any;
    }>;
}
