import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IModel extends Document {
  gleadMail: string;
  date?: Date;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
  nombreProyecto: string;
  nombreModelo: string;
  precioUF: string;
  mailContacto: string;
  nombreForm: string;
  emailForm: string;
  telefonoForm: string;
  rutForm: string;
  mensajeForm: string;
}

const ModelSchema = new Schema({
  gleadMail: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  modelUFPrice: {
    type: String,
    require: true
  },
  sourceFirst: {
    type: String,
    require: true
  },
  mediumFirst: {
    type: String,
    require: true
  },
  sourceCurrent: {
    type: String,
    require: true
  },
  mediumCurrent: {
    type: String,
    require: true
  },
  nombreProyecto: {
    type: String,
    require: true
  },
  nombreModelo: {
    type: String,
    require: true
  },
  mailContacto: {
    type: String,
    require: true
  },
  nombreForm: {
    type: String,
    require: true
  },
  emailForm: {
    type: String,
    require: true
  },
  telefonoForm: {
    type: String,
    require: true
  },
  rutForm: {
    type: String,
    require: true
  },
  mensajeForm: {
    type: String,
    require: true
  }
});

export const ModelForm: Model<IModel> = mongoose.model(
  'ModelForm',
  ModelSchema
);
