"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3001,
    base_url: process.env.BASE_URL,
    jwt: {
        secret: process.env.JWT_VERIFICATION_TOKEN_SECRET,
        expiresIn: process.env.JWT_VERIFICATION_TOKEN_EXPIRATION_TIME
    },
    db: {
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_DB,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    },
    mail: {
        host: process.env.MAIL_HOST,
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
        admin: process.env.MAIL_ADMIN
    }
});
exports.configuration = configuration;
//# sourceMappingURL=configuration.js.map