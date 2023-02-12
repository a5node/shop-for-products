declare namespace NodeJS {
  interface ProcessEnv {
    //Email `SendGrid`
    readonly SENDGRID_API_KEY: string;
    readonly EMAIL_HOST: string;
    readonly EMAIL_PORT: string;
    readonly EMAIL_AUTH_USER: string;
    readonly EMAIL_AUTH_PASSWORD: string;
  }
}
