import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

import config from './config';
import { RequestMailerType } from './types';

const transporter = nodemailer.createTransport({
  service: config.smtpService,
  secure: false,
  tls: { ciphers: 'SSLv3' },
  auth: {
    user: config.smtpUser,
    pass: config.smtpPass
  }
});

const options: hbs.NodemailerExpressHandlebarsOptions = {
  viewEngine: {
    partialsDir: __dirname + '/templates/partials',
    layoutsDir: __dirname + '/templates/layouts',
    extname: '.hbs'
  },
  extName: '.hbs',
  viewPath: 'src/templates/email'
};

transporter.use('compile', hbs(options));

if (config.dev) {
  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready');
    }
  });
}

const ccOptions = config.ccOne && config.ccTwo && [config.ccOne, config.ccTwo];

export async function mailerProject(requestMailer: RequestMailerType) {
  const mailOptions = {
    from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    to: requestMailer.contactMail,
    subject: requestMailer.subject,
    cc: ccOptions,
    replyTo: requestMailer.formEmail,
    text: `
      De: ${requestMailer.formName} <${requestMailer.formEmail}>
      Asunto: ${requestMailer.subject}

      Nombre y Apellido: ${requestMailer.formName}
      E-mail: ${requestMailer.formEmail}
      Teléfono: ${requestMailer.formPhone}
      Rut: ${requestMailer.formRut}
      Proyecto: ${requestMailer.projectName}

      Última Fuente: ${requestMailer.sourceCurrent}
      Último Medio: ${requestMailer.mediumCurrent}
      Primera Fuente: ${requestMailer.sourceFirst}
      Primer Medio: ${requestMailer.mediumFirst}

      Cuerpo del mensaje:
      ${requestMailer.formMessage}
    `,
    html: `
      <p>De: ${requestMailer.formName} ${requestMailer.formEmail}</p>
      <p>Asunto: ${requestMailer.subject}</p>
      <br />
      <p>Nombre y Apellido: ${requestMailer.formName}</p>
      <p>E-mail: ${requestMailer.formEmail}</p>
      <p>Teléfono: ${requestMailer.formPhone}</p>
      <p>Rut: ${requestMailer.formRut}</p>
      <p>Proyecto: ${requestMailer.projectName}</p>
      ${
        requestMailer.modelName
          ? '<p>Planta: ' + requestMailer.modelName + '</p>'
          : ''
      }
      <br />
      <p>Última Fuente: ${requestMailer.sourceCurrent}</p>
      <p>Último Medio: ${requestMailer.mediumCurrent}</p>
      <p>Primera Fuente: ${requestMailer.sourceFirst}</p>
      <p>Primer Medio: ${requestMailer.mediumFirst}</p>
      <br />
      <p>Cuerpo del mensaje:</p>
      <p>${requestMailer.formMessage}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    if (info) {
      return {
        type: 'mailerProject',
        isSuccess: true,
        message: 'Message sent: %s',
        messageId: info.messageId
      };
    }
  } catch (error) {
    throw new Error('Message mailerProject failed');
  }
}

export async function mailerComuna(requestMailer: RequestMailerType) {
  const mailOptions = {
    from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    to: requestMailer.contactMail,
    subject: requestMailer.subject,
    cc: ccOptions,
    replyTo: requestMailer.formEmail,
    text: `
      De: ${requestMailer.formName} <${requestMailer.formEmail}>
      Asunto: ${requestMailer.subject}

      Nombre y Apellido: ${requestMailer.formName}
      E-mail: ${requestMailer.formEmail}
      Teléfono: ${requestMailer.formPhone}
      Rut: ${requestMailer.formRut}
      Proyecto: ${requestMailer.projectName}

      Última Fuente: ${requestMailer.sourceCurrent}
      Último Medio: ${requestMailer.mediumCurrent}
      Primera Fuente: ${requestMailer.sourceFirst}
      Primer Medio: ${requestMailer.mediumFirst}

      Cuerpo del mensaje:
      ${requestMailer.formMessage}
    `,
    html: `
      <p>De: ${requestMailer.formName} ${requestMailer.formEmail}</p>
      <p>Asunto: ${requestMailer.subject}</p>
      <br />
      <p>Nombre y Apellido: ${requestMailer.formName}</p>
      <p>E-mail: ${requestMailer.formEmail}</p>
      <p>Teléfono: ${requestMailer.formPhone}</p>
      <p>Rut: ${requestMailer.formRut}</p>
      <p>Comuna: ${requestMailer.comuna}</p>
      ${
        requestMailer.modelName
          ? '<p>Planta: ' + requestMailer.modelName + '</p>'
          : ''
      }
      <br />
      <p>Última Fuente: ${requestMailer.sourceCurrent}</p>
      <p>Último Medio: ${requestMailer.mediumCurrent}</p>
      <p>Primera Fuente: ${requestMailer.sourceFirst}</p>
      <p>Primer Medio: ${requestMailer.mediumFirst}</p>
      <br />
      <p>Cuerpo del mensaje:</p>
      <p>${requestMailer.formMessage}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    if (info) {
      return {
        type: 'mailerComuna',
        isSuccess: true,
        message: 'Message sent: %s',
        messageId: info.messageId
      };
    }
  } catch (error) {
    throw new Error('Message mailerComuna failed');
  }
}

const ccOptionsPostventa = config.ccOne && [config.ccOne];

export async function mailerPostventa(requestMailer: RequestMailerType) {
  const mailOptions = {
    from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    to: requestMailer.emailPostventa,
    subject: 'Solicitud de Postventa desde el sitio web',
    cc: ccOptionsPostventa,
    replyTo: requestMailer.formEmail,
    text: `
      Se ha registrado una solicitud de Postventa en el sitio web.
      Los datos registrados son:

      De: ${requestMailer.formName} ${requestMailer.formEmail}

      Nombre: ${requestMailer.formName}
      Dirección: ${requestMailer.formAddress}
      Comuna: ${requestMailer.comuna}
      E-mail: ${requestMailer.formEmail}
      Teléfono: ${requestMailer.formPhone}

      Observaciones:
      ${requestMailer.formMessage}
      --
      Fin del mensaje
    `,
    html: `
      <p>Se ha registrado una solicitud de Postventa en el sitio web.
      Los datos registrados son:</p>

      <p>De: ${requestMailer.formName} ${requestMailer.formEmail}</p>
      <br />
      <p>Nombre: ${requestMailer.formName}</p>
      <p>Dirección: ${requestMailer.formAddress}</p>
      <p>Comuna: ${requestMailer.comuna}</p>
      <p>E-mail: ${requestMailer.formEmail}</p>
      <p>Teléfono: ${requestMailer.formPhone}</p>
      <br />
      <p>Observaciones:</p>
      <p>${requestMailer.formMessage}</p>
      <br />
      --
      Fin del mensaje
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    if (info) {
      return {
        type: 'mailerPostventa',
        isSuccess: true,
        message: 'Message sent: %s',
        messageId: info.messageId
      };
    }
  } catch (error) {
    throw new Error('Message mailerPostventa failed');
  }
}

export async function mailerReply(requestMailer: RequestMailerType) {
  const mailOptions = {
    from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    to: requestMailer.formEmail,
    subject: 'Pronto nos contactaremos con usted',
    replyTo: requestMailer.formEmail,
    template: requestMailer.formType,
    context: {
      nombreForm: requestMailer.formName,
      nombreProyecto: requestMailer.projectName
    }
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    if (info) {
      return {
        type: 'mailerReply',
        isSuccess: true,
        message: 'Message sent: %s',
        messageId: info.messageId
      };
    }
  } catch (error) {
    throw new Error('Message mailerReply failed');
  }
}

export async function mailerGlead(requestMailer: RequestMailerType) {
  const mailOptions = {
    from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    to: requestMailer.gleadMail,
    subject: 'Cotización web metropolitana.cl',
    text: `
      Nombre: ${requestMailer.formName}
      Email: ${requestMailer.formEmail}
      Rut: ${requestMailer.formRut}
      Fono: ${requestMailer.formPhone}
      Preciouf: ${requestMailer.projectUFPrice}
      Comentario: ${requestMailer.formMessage}
    `,
    html: `
      <p>Nombre: ${requestMailer.formName}</p>
      <p>Email: ${requestMailer.formEmail}</p>
      <p>Rut: ${requestMailer.formRut}</p>
      <p>Fono: ${requestMailer.formPhone}</p>
      <p>Preciouf: ${requestMailer.projectUFPrice}</p>
      <p>Comentario: ${requestMailer.formMessage}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info) {
      return {
        type: 'mailerGlead',
        isSuccess: true,
        message: 'Message sent: %s',
        messageId: info.messageId
      };
    }
  } catch (error) {
    throw new Error('Message mailerGlead failed');
  }
}
