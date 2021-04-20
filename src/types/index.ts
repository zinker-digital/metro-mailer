export type FormType =
  | 'project'
  | 'projectFloat'
  | 'model'
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

export type RequestProjectType = {
  formType: FormType;
  projectName: string;
  projectUFPrice: string;
  gleadMail: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formRut: string;
  formMessage: string;
  contactMail: string;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
};

export type RequestProjectFloatType = {
  formType: FormType;
  projectName: string;
  projectUFPrice: string;
  gleadMail: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formRut: string;
  formMessage: string;
  contactMail: string;
  formAddress: string;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
};

export type RequestModelType = {
  formType: FormType;
  projectName: string;
  modelName: string;
  modelUFPrice: string;
  gleadMail: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formRut: string;
  formMessage: string;
  contactMail: string;
  formAddress: string;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
};

export type RequestPostventaType = {
  formType: FormType;
  formCommune: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formRut: string;
  formMessage: string;
  contactMail: string;
  formAddress: string;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
};

export type RequestComuneseoType = {
  formType: FormType;
  comunaseo: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formRut: string;
  formMessage: string;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
};

export type ResponseMailerType = {
  status: 'rejected' | 'fulfilled';
  value: {
    accepted: string[];
    rejected: string[];
    envelopeTime: number;
    messageTime: number;
    messageSize: number;
    response: string;
    envelope: {
      from: string;
      to: string[];
    };
    messageId: string;
  };
};
