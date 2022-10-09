import { MailService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendAppointment(data: any): Promise<any>;
    sendOrder(data: any): Promise<any>;
    sendConfirmOrder(data: any): Promise<any>;
    register(registrationData: any): Promise<any>;
    confirm(token: any): Promise<void>;
    sendCheck(): Promise<void>;
}
