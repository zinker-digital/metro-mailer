import mongoose, { Schema, Document } from 'mongoose';

export interface IModel extends Document {
  gleadMail: string;
  date: Date;
  precioUF: string;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
  nombreProyecto: string;
  nombrePlanta: string;
  mailContacto: string;
  nombreForm: string;
  emailForm: string;
  telefonoForm: string;
  rutForm: string;
  mensajeForm: string;
}

const modelSchema = new Schema({
  gleadMail: {
    type: String
  },
  date: {
    type: Date,
    default: new Date()
  },
  precioUF: {
    type: String
  },
  sourceFirst: {
    type: String
  },
  mediumFirst: {
    type: String
  },
  sourceCurrent: {
    type: String
  },
  mediumCurrent: {
    type: String
  },
  nombreProyecto: {
    type: String
  },
  nombrePlanta: {
    type: String
  },
  mailContacto: {
    type: String
  },
  nombreForm: {
    type: String
  },
  emailForm: {
    type: String
  },
  telefonoForm: {
    type: String
  },
  rutForm: {
    type: String
  },
  mensajeForm: {
    type: String
  }
});

export const ModelForm = mongoose.model<IModel>('ModelForm', modelSchema);
