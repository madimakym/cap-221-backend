import { Body, Controller, Post, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('/api/v1/mail')
export class MailController {
  constructor(private readonly mailService: MailService) { }


  @Post("order")
  sendOrder(@Body() data) {
    return this.mailService.sendOrder(data);
  }

  @Post("order/confirm")
  sendConfirmOrder(@Body() data) {
    return this.mailService.sendConfirmOrder(data);
  }


  @Post('register')
  async register(@Body() registrationData) {
    // const user = await this.authenticationService.register(registrationData);
    return await this.mailService.sendVerificationLink("maky", "madi", "makymadi@gmail.com");
  }

  @Post('confirm')
  async confirm(@Body() token) {
    await this.mailService.decodeConfirmationToken(token);
  }

  @Get('default')
  async sendCheck() {
    await this.mailService.sendCheck();
  }
}
