export type FormType =
  | 'project'
  | 'model'
  | 'contact'
  | 'postventa'
  | 'comunaseo';

export type RequestMailerType = {
  formType: FormType;
  projectName?: string;
  projectUFPrice?: string;
  modelName?: string;
  modelUFPrice?: string;
  gleadMail?: string;
  comuna?: string;
  subject: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formRut: string;
  formMessage: string;
  contactMail?: string;
  formAddress?: string;
  emailPostventa?: string;
  sourceFirst?: string;
  mediumFirst?: string;
  sourceCurrent?: string;
  mediumCurrent?: string;
};
