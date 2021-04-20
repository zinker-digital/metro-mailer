import joi from 'joi';

export const communeseoSchema = joi.object({
  formType: joi.string().valid('comunaseo').required(),
  comunaseo: joi.string().required(),
  formName: joi.string().required(),
  formEmail: joi.string().required(),
  formPhone: joi.string().required(),
  formRut: joi.string().required(),
  formMessage: joi.string().required(),
  sourceFirst: joi.string().required(),
  mediumFirst: joi.string().required(),
  sourceCurrent: joi.string().required(),
  mediumCurrent: joi.string().required()
});
