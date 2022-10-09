import { BadRequestException, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
// import { UserService } from '../user/user.service';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
    private readonly jwtService: JwtService,
    // private readonly userService: UserService,
  ) { }

  async sendCheck() {
    const resp = await this.mailerService.sendMail({
      to: "makymadi@gmail.com",
      subject: 'Test mail',
      template: 'default',
    });
    return resp;
  }

  async sendVerificationLink(firstname: string, lastname: string, email: string) {
    const payload = { email };
    // const token = this.jwtService.sign(payload, {
    //   secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
    //   expiresIn: `${this.configService.get('JWT_VERIFICATION_TOKEN_EXPIRATION_TIME')}s`
    // });

    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('jwt.secret'),
      expiresIn: `3600s`
    });
    // const url = `${this.configService.get('base_url')}/reset-password/?token=${token}`;
    // this.mailService.sendResetPassword(user.email, user.firstname, url);
    const url = `${this.configService.get('BASE_URL')}confirm-email?token=${token}`;
    const resp = await this.mailerService.sendMail({
      to: email,
      subject: 'Demande de confirmation d\'inscription',
      template: 'verification_link_template',
      context: {
        firstname: firstname,
        lastname: lastname,
        url: url
      },
    });
    return resp;
  }

  public async confirmEmail(email: string) {
    // const user = await this.userService.getByEmail(email);
    // if (user.isEmailConfirmed) {
    //   throw new BadRequestException('Email dejà confirmée');
    // }
    // await this.userService.markEmailAsConfirmed(email);
  }

  public async decodeConfirmationToken({ token }) {
    // try {
    //   const payload = await this.jwtService.verify(token, {
    //     secret: this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
    //   });
    //   console.log("payload:", payload)
    // } catch (error) {
    // }
  }

  async sendConfirm({ to, firstname, lastname }) {
    const resp = await this.mailerService.sendMail({
      to: to,
      subject: 'Demande de confirmation d\'inscription',
      template: 'confirmation',
      context: {
        firstname: firstname,
        lastname: lastname
      },
    });
    return resp;
  }


  async sendOrder(orderData) {
    const resp = await this.mailerService.sendMail({
      to: this.configService.get('MAIL_ADMIN'),
      subject: 'Notification de commande',
      template: 'order',
      context: {
        order: orderData.order,
        coordonnees: orderData.coordonnees,
        libelle: orderData.libelle,
      },
    });
    return resp;
  }

  async sendConfirmOrder(orderData) {
    const resp = await this.mailerService.sendMail({
      to: orderData.to,
      subject: 'Commande confirmée',
      template: 'order_confirm',
      context: {
        order: orderData.order,
        firstname: orderData.firstname
      },
    });
    console.log("orderData", orderData);
    return resp;
  }

  async sendConfirmAdmin() {
    await this.mailerService.sendMail({
      to: this.configService.get('MAIL_ADMIN'),
      subject: 'Notification d\'inscription',
      template: 'confirmation_admin',
    });
  }

  async sendAppointment(data) {
    if (data.type === "success") {
      const resp = await this.mailerService.sendMail({
        to: data.to,
        subject: 'Notification de réservation',
        template: 'appointment',
      });
      return resp;
    } else {
      const resp = await this.mailerService.sendMail({
        to: this.configService.get('MAIL_ADMIN'),
        subject: 'Annulation de réservation ',
        template: 'appointment_cancel',
        context: {
          date: data.date,
          customer: data.customer,
          professional: data.professional
        },
      });
      return resp;
    }
  }

  async sendResetPassword(to, firstname, url) {
    await this.mailerService.sendMail({
      to: to,
      subject: 'Réinitialisation de votre mot de passe',
      template: 'reset_password',
      context: {
        firstname: firstname,
        url: url
      },
    });
  }

}
