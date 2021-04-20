import config from '../config';
import { transporter } from '../nodemailer.controller';
import {
  RequestProjectType,
  RequestModelType,
  FormType,
  RequestPostventaType,
  RequestComuneseoType,
  RequestProjectFloatType,
  ResponseMailerType
} from '../types';

async function emailTransporter(
  requestMailer:
    | RequestProjectType
    | RequestProjectFloatType
    | RequestModelType
    | RequestPostventaType
    | RequestComuneseoType,
  formType: FormType
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let responsePromises: PromiseSettledResult<any>[] = [];
  if (formType === 'project') {
    const reqMailter = requestMailer as RequestProjectType;
    const ccOptions = config.ccOne &&
      config.ccTwo && [config.ccOne, config.ccTwo];

    const mailOptions = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: reqMailter.contactMail,
      subject: 'Formulario Contacto Proyecto',
      cc: ccOptions,
      replyTo: reqMailter.formEmail,
      text: `
        De: ${reqMailter.formName} <${reqMailter.formEmail}>
        Asunto: Formulario Contacto Proyecto

        Nombre y Apellido: ${reqMailter.formName}
        E-mail: ${reqMailter.formEmail}
        Teléfono: ${reqMailter.formPhone}
        Rut: ${reqMailter.formRut}
        Proyecto: ${reqMailter.projectName}

        Última Fuente: ${reqMailter.sourceCurrent}
        Último Medio: ${reqMailter.mediumCurrent}
        Primera Fuente: ${reqMailter.sourceFirst}
        Primer Medio: ${reqMailter.mediumFirst}

        Cuerpo del mensaje:
        ${reqMailter.formMessage}
      `,
      html: `
        <p>De: ${reqMailter.formName} ${reqMailter.formEmail}</p>
        <p>Asunto: Formulario Contacto Proyecto</p>
        <br />
        <p>Nombre y Apellido: ${reqMailter.formName}</p>
        <p>E-mail: ${reqMailter.formEmail}</p>
        <p>Teléfono: ${reqMailter.formPhone}</p>
        <p>Rut: ${reqMailter.formRut}</p>
        <p>Proyecto: ${reqMailter.projectName}</p>
        <br />
        <p>Última Fuente: ${reqMailter.sourceCurrent}</p>
        <p>Último Medio: ${reqMailter.mediumCurrent}</p>
        <p>Primera Fuente: ${reqMailter.sourceFirst}</p>
        <p>Primer Medio: ${reqMailter.mediumFirst}</p>
        <br />
        <p>Cuerpo del mensaje:</p>
        <p>${reqMailter.formMessage}</p>
      `
    };

    // const mailOptionsReply = {
    //   from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    //   to: reqMailter.formEmail,
    //   subject: 'Pronto nos contactaremos con usted',
    //   replyTo: reqMailter.formEmail,
    //   template: formType,
    //   context: {
    //     nombreForm: reqMailter.formName,
    //     nombreProyecto: reqMailter.projectName
    //   }
    // };

    const mailOptionsGlead = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: reqMailter.gleadMail,
      subject: 'Cotización web metropolitana.cl',
      text: `
        Nombre: ${reqMailter.formName}
        Email: ${reqMailter.formEmail}
        Rut: ${reqMailter.formRut}
        Fono: ${reqMailter.formPhone}
        Preciouf: ${reqMailter.projectUFPrice}
        Comentario: ${reqMailter.formMessage}
      `,
      html: `
        <p>Nombre: ${reqMailter.formName}</p>
        <p>Email: ${reqMailter.formEmail}</p>
        <p>Rut: ${reqMailter.formRut}</p>
        <p>Fono: ${reqMailter.formPhone}</p>
        <p>Preciouf: ${reqMailter.projectUFPrice}</p>
        <p>Comentario: ${reqMailter.formMessage}</p>
      `
    };

    const infoMail = await transporter.sendMail(mailOptions);
    // const infoReply = await transporter.sendMail(mailOptionsReply);
    const infoGlead = await transporter.sendMail(mailOptionsGlead);

    responsePromises = await Promise.allSettled([infoMail, infoGlead]);
  } else if (formType === 'projectFloat') {
    const reqMailter = requestMailer as RequestProjectFloatType;
    const ccOptions = config.ccOne &&
      config.ccTwo && [config.ccOne, config.ccTwo];

    const mailOptions = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: reqMailter.contactMail,
      subject: 'Formulario Flotante Proyecto',
      cc: ccOptions,
      replyTo: reqMailter.formEmail,
      text: `
        De: ${reqMailter.formName} <${reqMailter.formEmail}>
        Asunto: Formulario Flotante Proyecto

        Nombre y Apellido: ${reqMailter.formName}
        E-mail: ${reqMailter.formEmail}
        Teléfono: ${reqMailter.formPhone}
        Rut: ${reqMailter.formRut}
        Proyecto: ${reqMailter.projectName}

        Última Fuente: ${reqMailter.sourceCurrent}
        Último Medio: ${reqMailter.mediumCurrent}
        Primera Fuente: ${reqMailter.sourceFirst}
        Primer Medio: ${reqMailter.mediumFirst}

        Cuerpo del mensaje:
        ${reqMailter.formMessage}
      `,
      html: `
        <p>De: ${reqMailter.formName} ${reqMailter.formEmail}</p>
        <p>Asunto: Formulario Flotante Proyecto</p>
        <br />
        <p>Nombre y Apellido: ${reqMailter.formName}</p>
        <p>E-mail: ${reqMailter.formEmail}</p>
        <p>Teléfono: ${reqMailter.formPhone}</p>
        <p>Rut: ${reqMailter.formRut}</p>
        <p>Proyecto: ${reqMailter.projectName}</p>
        <br />
        <p>Última Fuente: ${reqMailter.sourceCurrent}</p>
        <p>Último Medio: ${reqMailter.mediumCurrent}</p>
        <p>Primera Fuente: ${reqMailter.sourceFirst}</p>
        <p>Primer Medio: ${reqMailter.mediumFirst}</p>
        <br />
        <p>Cuerpo del mensaje:</p>
        <p>${reqMailter.formMessage}</p>
      `
    };

    // const mailOptionsReply = {
    //   from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    //   to: reqMailter.formEmail,
    //   subject: 'Pronto nos contactaremos con usted',
    //   replyTo: reqMailter.formEmail,
    //   template: 'project',
    //   context: {
    //     nombreForm: reqMailter.formName,
    //     nombreProyecto: reqMailter.projectName
    //   }
    // };

    const mailOptionsGlead = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: reqMailter.gleadMail,
      subject: 'Cotización web metropolitana.cl',
      text: `
        Nombre: ${reqMailter.formName}
        Email: ${reqMailter.formEmail}
        Rut: ${reqMailter.formRut}
        Fono: ${reqMailter.formPhone}
        Preciouf: ${reqMailter.projectUFPrice}
        Comentario: ${reqMailter.formMessage}
      `,
      html: `
        <p>Nombre: ${reqMailter.formName}</p>
        <p>Email: ${reqMailter.formEmail}</p>
        <p>Rut: ${reqMailter.formRut}</p>
        <p>Fono: ${reqMailter.formPhone}</p>
        <p>Preciouf: ${reqMailter.projectUFPrice}</p>
        <p>Comentario: ${reqMailter.formMessage}</p>
      `
    };

    const infoMail = await transporter.sendMail(mailOptions);
    // const infoReply = await transporter.sendMail(mailOptionsReply);
    const infoGlead = await transporter.sendMail(mailOptionsGlead);

    responsePromises = await Promise.allSettled([infoMail, infoGlead]);
  } else if (formType === 'model') {
    const reqMailter = requestMailer as RequestModelType;
    const ccOptions = config.ccOne &&
      config.ccTwo && [config.ccOne, config.ccTwo];

    const mailOptions = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: reqMailter.contactMail,
      subject: 'Formulario Cotización Modelo',
      cc: ccOptions,
      replyTo: reqMailter.formEmail,
      text: `
        De: ${reqMailter.formName} <${reqMailter.formEmail}>
        Asunto: Formulario Cotización Modelo

        Nombre y Apellido: ${reqMailter.formName}
        E-mail: ${reqMailter.formEmail}
        Teléfono: ${reqMailter.formPhone}
        Rut: ${reqMailter.formRut}
        Proyecto: ${reqMailter.projectName}

        Última Fuente: ${reqMailter.sourceCurrent}
        Último Medio: ${reqMailter.mediumCurrent}
        Primera Fuente: ${reqMailter.sourceFirst}
        Primer Medio: ${reqMailter.mediumFirst}

        Cuerpo del mensaje:
        ${reqMailter.formMessage}
      `,
      html: `
        <p>De: ${reqMailter.formName} ${reqMailter.formEmail}</p>
        <p>Asunto: Formulario Cotización Modelo</p>
        <br />
        <p>Nombre y Apellido: ${reqMailter.formName}</p>
        <p>E-mail: ${reqMailter.formEmail}</p>
        <p>Teléfono: ${reqMailter.formPhone}</p>
        <p>Rut: ${reqMailter.formRut}</p>
        <p>Proyecto: ${reqMailter.projectName}</p>
        <p>Planta: ${reqMailter.modelName}</p>
        <br />
        <p>Última Fuente: ${reqMailter.sourceCurrent}</p>
        <p>Último Medio: ${reqMailter.mediumCurrent}</p>
        <p>Primera Fuente: ${reqMailter.sourceFirst}</p>
        <p>Primer Medio: ${reqMailter.mediumFirst}</p>
        <br />
        <p>Cuerpo del mensaje:</p>
        <p>${reqMailter.formMessage}</p>
      `
    };

    // const mailOptionsReply = {
    //   from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
    //   to: reqMailter.formEmail,
    //   subject: 'Pronto nos contactaremos con usted',
    //   replyTo: reqMailter.formEmail,
    //   template: formType,
    //   context: {
    //     nombreForm: reqMailter.formName,
    //     nombreProyecto: reqMailter.projectName
    //   }
    // };

    const mailOptionsGlead = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: reqMailter.gleadMail,
      subject: 'Cotización web metropolitana.cl',
      text: `
        Nombre: ${reqMailter.formName}
        Email: ${reqMailter.formEmail}
        Rut: ${reqMailter.formRut}
        Fono: ${reqMailter.formPhone}
        Preciouf: ${reqMailter.modelUFPrice}
        Comentario: ${reqMailter.formMessage}
      `,
      html: `
        <p>Nombre: ${reqMailter.formName}</p>
        <p>Email: ${reqMailter.formEmail}</p>
        <p>Rut: ${reqMailter.formRut}</p>
        <p>Fono: ${reqMailter.formPhone}</p>
        <p>Preciouf: ${reqMailter.modelUFPrice}</p>
        <p>Comentario: ${reqMailter.formMessage}</p>
      `
    };

    const infoMail = await transporter.sendMail(mailOptions);
    // const infoReply = await transporter.sendMail(mailOptionsReply);
    const infoGlead = await transporter.sendMail(mailOptionsGlead);

    responsePromises = await Promise.allSettled([infoMail, infoGlead]);
  } else if (formType === 'postventa') {
    const reqMailer = requestMailer as RequestPostventaType;
    const ccOptions = config.ccOne &&
      config.ccTwo && [config.ccOne, config.ccTwo];

    const mailOptions = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: config.emailComunaseo,
      subject: 'Solicitud de Postventa desde el sitio web',
      cc: ccOptions,
      replyTo: reqMailer.formEmail,
      text: `
          Se ha registrado una solicitud de Postventa en el sitio web.
          Los datos registrados son:
          De: ${reqMailer.formName} ${reqMailer.formEmail}

          Nombre y Apellido: ${reqMailer.formName}
          Dirección: ${reqMailer.formAddress}
          Comuna: ${reqMailer.formCommune}
          E-mail: ${reqMailer.formEmail}
          Teléfono: ${reqMailer.formPhone}

          Última Fuente: ${reqMailer.sourceCurrent}
          Último Medio: ${reqMailer.mediumCurrent}
          Primera Fuente: ${reqMailer.sourceFirst}
          Primer Medio: ${reqMailer.mediumFirst}

          Cuerpo del mensaje:
          ${reqMailer.formMessage}
        `,
      html: `
          Se ha registrado una solicitud de Postventa en el sitio web.
          Los datos registrados son:
          De: ${reqMailer.formName} ${reqMailer.formEmail}

          Nombre y Apellido: ${reqMailer.formName}
          Dirección: ${reqMailer.formAddress}
          Comuna: ${reqMailer.formCommune}
          E-mail: ${reqMailer.formEmail}
          Teléfono: ${reqMailer.formPhone}

          Última Fuente: ${reqMailer.sourceCurrent}
          Último Medio: ${reqMailer.mediumCurrent}
          Primera Fuente: ${reqMailer.sourceFirst}
          Primer Medio: ${reqMailer.mediumFirst}

          Cuerpo del mensaje:
          ${reqMailer.formMessage}
        `
    };

    const infoMail = await transporter.sendMail(mailOptions);
    responsePromises = await Promise.allSettled([infoMail]);
  } else if (formType === 'comunaseo') {
    const reqMailer = requestMailer as RequestComuneseoType;
    const ccOptions = config.ccOne || '';

    const mailOptions = {
      from: '"Metropolitana Grupo Inmobiliario" <contactos@metropolitana.cl>',
      to: config.emailAccount,
      subject: 'Formulario Flotante Proyectos por Comuna',
      cc: ccOptions,
      replyTo: reqMailer.formEmail,
      text: `
        De: ${reqMailer.formName} ${reqMailer.formEmail}
        Asunto: Formulario Flotante Proyectos por Comuna

        Nombre y Apellido: ${reqMailer.formName}
        E-mail: ${reqMailer.formEmail}
        Teléfono: ${reqMailer.formPhone}
        Rut: ${reqMailer.formRut}
        Comuna: ${reqMailer.comunaseo}

        Última Fuente: ${reqMailer.sourceCurrent}
        Último Medio: ${reqMailer.mediumCurrent}
        Primera Fuente: ${reqMailer.sourceFirst}
        Primer Medio: ${reqMailer.mediumFirst}

        Cuerpo del mensaje:
        ${reqMailer.formMessage}
      `,
      html: `
        <p>De: ${reqMailer.formName} ${reqMailer.formEmail}</p>
        <p>Asunto: Formulario Flotante Proyectos por Comuna</p>
        <br />
        <p>Asunto: Formulario Flotante Proyectos por Comuna</p>
        <p>E-mail: ${reqMailer.formEmail}</p>
        <p>Teléfono: ${reqMailer.formPhone}</p>
        <P>Rut: ${reqMailer.formRut}</P>
        <p>Comuna: ${reqMailer.comunaseo}</p>
        <br />
        <p>Última Fuente: ${reqMailer.sourceCurrent}</p>
        <p>Último Medio: ${reqMailer.mediumCurrent}</p>
        <p>Primera Fuente: ${reqMailer.sourceFirst}</p>
        <p>Primer Medio: ${reqMailer.mediumFirst}</p>
        <br />
        <p>Cuerpo del mensaje:</p>
        <p>${reqMailer.formMessage}</p>
      `
    };

    const infoMail = await transporter.sendMail(mailOptions);

    responsePromises = await Promise.allSettled([infoMail]);
  }
  return {
    isSuccess: true,
    message: 'Message sent: %s',
    messages: responsePromises.map((res) => {
      const newRes = res as ResponseMailerType;
      return {
        status: newRes.status,
        messageId: newRes.value.messageId
      };
    })
  };
}

export default emailTransporter;
