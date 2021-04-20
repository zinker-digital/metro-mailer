import nodemailer from 'nodemailer';
// import hbs from 'nodemailer-express-handlebars';

import config from './config';

const transporter = nodemailer.createTransport({
  service: config.smtpService,
  secure: false,
  tls: { ciphers: 'SSLv3' },
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass
  }
});

// const options: hbs.NodemailerExpressHandlebarsOptions = {
//   viewEngine: {
//     partialsDir: __dirname + '/templates/partials',
//     layoutsDir: __dirname + '/templates/layouts',
//     extname: '.hbs'
//   },
//   extName: '.hbs',
//   viewPath: 'src/templates/email'
// };

// transporter.use('compile', hbs(options));

if (config.dev) {
  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready');
    }
  });
}

export { transporter };
