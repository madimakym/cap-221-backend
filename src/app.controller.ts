import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly appService: AppService, private configService: ConfigService) { }

  @Get('')
  getHello(): string {
    console.log(this.configService.get('port'));
    console.log("Hello");
    return this.appService.getHello();
  }
}
