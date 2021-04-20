import joi from 'joi';

export const modelSchema = joi.object({
  formType: joi.string().valid('model').required(),
  projectName: joi.string().required(),
  modelName: joi.string().required(),
  modelUFPrice: joi.string().required(),
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
