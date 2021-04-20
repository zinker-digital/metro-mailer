import { EventEmitter } from 'events';

import {
  RequestProjectType,
  RequestModelType,
  RequestComuneseoType,
  RequestPostventaType
} from '../types';
import dbConnect from '../db/mongo';
import { ProjectForm } from '../models/project';
import { ModelForm } from '../models/model';
import { PostventaForm } from '../models/postventa';
import { ProjectFloatForm } from '../models/project-float';
import { CommuneSeoForm } from '../models/comunaseo';

const eventEmitter = new EventEmitter();

eventEmitter.on('project', async (body: RequestProjectType) => {
  await dbConnect();
  if (body.formType === 'project') {
    try {
      await ProjectForm.create({
        nombreForm: body.formName,
        gleadMail: body.gleadMail,
        precioUF: body.projectUFPrice,
        sourceFirst: body.sourceFirst,
        mediumFirst: body.mediumFirst,
        sourceCurrent: body.sourceCurrent,
        mediumCurrent: body.mediumCurrent,
        nombreProyecto: body.projectName,
        mailContacto: body.contactMail,
        emailForm: body.formEmail,
        telefonoForm: body.formPhone,
        rutForm: body.formRut,
        mensajeForm: body.formMessage
      });
    } catch (error) {}
  }
});

eventEmitter.on('model', async (body: RequestModelType) => {
  await dbConnect();
  if (body.formType === 'model') {
    try {
      await ModelForm.create({
        nombreForm: body.formName,
        gleadMail: body.gleadMail,
        precioUF: body.modelUFPrice,
        sourceFirst: body.sourceFirst,
        mediumFirst: body.mediumFirst,
        sourceCurrent: body.sourceCurrent,
        mediumCurrent: body.mediumCurrent,
        nombreProyecto: body.projectName,
        nombreModelo: body.modelName,
        mailContacto: body.contactMail,
        emailForm: body.formEmail,
        telefonoForm: body.formPhone,
        rutForm: body.formRut,
        mensajeForm: body.formMessage
      });
    } catch (error) {}
  }
});

eventEmitter.on('comunaseo', async (body: RequestComuneseoType) => {
  await dbConnect();
  if (body.formType === 'comunaseo') {
    try {
      await CommuneSeoForm.create({
        sourceFirst: body.sourceFirst,
        mediumFirst: body.mediumFirst,
        sourceCurrent: body.sourceCurrent,
        mediumCurrent: body.mediumCurrent,
        nombreForm: body.formName,
        emailForm: body.formEmail,
        telefonoForm: body.formPhone,
        rutForm: body.formRut,
        mensajeForm: body.formMessage,
        commune: body.comunaseo
      });
    } catch (error) {}
  }
});

eventEmitter.on('postventa', async (body: RequestPostventaType) => {
  await dbConnect();
  if (body.formType === 'postventa') {
    try {
      await PostventaForm.create({
        sourceFirst: body.sourceFirst,
        mediumFirst: body.mediumFirst,
        sourceCurrent: body.sourceCurrent,
        mediumCurrent: body.mediumCurrent,
        nombreForm: body.formName,
        emailForm: body.formEmail,
        telefonoForm: body.formPhone,
        comunaForm: body.formCommune,
        rutForm: body.formRut,
        mensajeForm: body.formMessage
      });
    } catch (error) {}
  }
});

eventEmitter.on('projectFloat', async (body: RequestPostventaType) => {
  await dbConnect();
  if (body.formType === 'projectFloat') {
    try {
      await ProjectFloatForm.create({
        sourceFirst: body.sourceFirst,
        mediumFirst: body.mediumFirst,
        sourceCurrent: body.sourceCurrent,
        mediumCurrent: body.mediumCurrent,
        nombreForm: body.formName,
        emailForm: body.formEmail,
        telefonoForm: body.formPhone,
        comunaForm: body.formCommune,
        rutForm: body.formRut,
        mensajeForm: body.formMessage
      });
    } catch (error) {}
  }
});

export { eventEmitter };
