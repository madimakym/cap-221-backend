"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let MailService = class MailService {
    constructor(mailerService, configService, jwtService) {
        this.mailerService = mailerService;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async sendCheck() {
        const resp = await this.mailerService.sendMail({
            to: "makymadi@gmail.com",
            subject: 'Test mail',
            template: 'default',
        });
        return resp;
    }
    async sendAuthConfirmCode(code, email) {
        const resp = await this.mailerService.sendMail({
            to: email,
            subject: 'Test mail',
            template: 'auth-confirm-code',
            context: {
                code: code
            },
        });
        return resp;
    }
    async sendVerificationLink(firstname, lastname, email) {
        const payload = { email };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('jwt.secret'),
            expiresIn: `3600s`
        });
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
    async confirmEmail(email) {
    }
    async decodeConfirmationToken({ token }) {
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
    async sendSubscriptionTrialEnding(user, url) {
        const resp = await this.mailerService.sendMail({
            to: user.email,
            subject: 'Votre essai de Kliner se termine dans 3 jours',
            template: 'subscription_trial_ending',
            context: {
                firstname: user.firstname,
                lastname: user.lastname,
                url
            },
        });
        return resp;
    }
    async sendSubscriptionStarting(user, url) {
        const resp = await this.mailerService.sendMail({
            to: user.email,
            subject: 'Votre ménage sur pilotage automatique',
            template: 'subscription_started',
            context: {
                firstname: user.firstname,
                lastname: user.lastname,
                url
            },
        });
        return resp;
    }
    async sendReportsToPartner(partner, url) {
        const resp = await this.mailerService.sendMail({
            to: partner.email,
            subject: 'Rapports financier',
            template: 'partner_report'
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
        }
        else {
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
        try {
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
        catch (error) {
            return {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: error.message,
            };
        }
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_1.ConfigService,
        jwt_1.JwtService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map