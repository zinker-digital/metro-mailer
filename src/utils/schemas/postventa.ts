import joi from 'joi';

export const postventaSchema = joi.object({
  formType: joi.string().valid('postventa').required(),
  formCommune: joi.string().required(),
  formName: joi.string().required(),
  formEmail: joi.string().required(),
  formPhone: joi.string().required(),
  formRut: joi.string().required(),
  formMessage: joi.string().required(),
  contactMail: joi.string().required(),
  formAddress: joi.string().required(),
  sourceFirst: joi.string().required(),
  mediumFirst: joi.string().required(),
  sourceCurrent: joi.string().required(),
  mediumCurrent: joi.string().required()
});
