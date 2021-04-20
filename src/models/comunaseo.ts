import { Schema, Document, model } from 'mongoose';

export interface CommuneseoI extends Document {
  date?: Date;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
  nombreForm: string;
  emailForm: string;
  telefonoForm: string;
  rutForm: string;
  mensajeForm: string;
  commune: string;
}

const CommuneseoSchema: Schema<CommuneseoI> = new Schema({
  date: {
    type: Date,
    default: new Date()
  },
  commune: {
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

export const CommuneSeoForm = model<CommuneseoI>(
  'CommuneSeoForm',
  CommuneseoSchema
);
