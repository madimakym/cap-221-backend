export declare const configuration: () => {
    NODE_ENV: string;
    port: number;
    base_url: string;
    jwt: {
        secret: string;
        expiresIn: string;
    };
    db: {
        host: string;
        database: string;
        port: string;
        user: string;
        password: string;
    };
    mail: {
        host: string;
        user: string;
        password: string;
        admin: string;
    };
};
