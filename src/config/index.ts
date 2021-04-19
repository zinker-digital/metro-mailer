import { config } from 'dotenv';

config();

export default {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  smtpService: process.env.SMTP_SERVICE,
  emailAccount: process.env.EMAIL_ACCOUNT,
  emailPostventa: process.env.EMAIL_POSTVENTA,
  ccOne: process.env.CC_ONE,
  ccTwo: process.env.CC_TWO
};

export const configDb = {
  uri: process.env.MONGO_URI
};
