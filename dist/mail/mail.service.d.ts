import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class MailService {
    private mailerService;
    private configService;
    private readonly jwtService;
    constructor(mailerService: MailerService, configService: ConfigService, jwtService: JwtService);
    sendCheck(): Promise<any>;
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
    sendOrder(orderData: any): Promise<any>;
    sendCancelOrder(orderData: any): Promise<any>;
    sendConfirmOrder(orderData: any): Promise<any>;
    sendConfirmAdmin(): Promise<void>;
    sendAppointmentCancel(data: any): Promise<any>;
    sendAppointmentToAdmin(data: any): Promise<any>;
    sendAppointmentToCustomer(data: any): Promise<any>;
    sendResetPassword(to: any, firstname: any, url: any): Promise<void>;
}
