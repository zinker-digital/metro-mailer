import joi from 'joi';

export const projectFloatSchema = joi.object({
  formType: joi.string().valid('projectFloat').required(),
  projectName: joi.string().required(),
  projectUFPrice: joi.string().required(),
  gleadMail: joi.string().required(),
  formName: joi.string().required(),
  formEmail: joi.string().required(),
  formPhone: joi.string().required(),
  formRut: joi.string().required(),
  formMessage: joi.string().required(),
  contactMail: joi.string().required(),
  sourceFirst: joi.string().required(),
  mediumFirst: joi.string().required(),
  sourceCurrent: joi.string().required(),
  mediumCurrent: joi.string().required()
});
