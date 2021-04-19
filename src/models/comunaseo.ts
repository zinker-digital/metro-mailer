import mongoose, { Schema, Document } from 'mongoose';

export interface IComuneSeo extends Document {
  date: Date;
  commune: string;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
  nombreForm: string;
  emailForm: string;
  telefonoForm: string;
  rutForm: string;
  mensajeForm: string;
}

const communeSeoSchema = new Schema({
  date: {
    type: Date,
    default: new Date()
  },
  commune: {
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

export const CommuneSeoForm = mongoose.model<IComuneSeo>(
  'CommuneSeoForm',
  communeSeoSchema
);
