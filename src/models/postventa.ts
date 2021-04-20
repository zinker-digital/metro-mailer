import mongoose, { Schema, Document } from 'mongoose';

export interface IPostventa extends Document {
  date?: Date;
  sourceFirst: string;
  mediumFirst: string;
  sourceCurrent: string;
  mediumCurrent: string;
  nombreForm: string;
  emailForm: string;
  telefonoForm: string;
  comunaForm: string;
  mensajeForm: string;
}

const PostventaSchema = new Schema({
  date: {
    type: Date,
    default: new Date()
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
  comunaForm: {
    type: String,
    require: true
  },
  rutForm: {
    type: String,
    require: true
  },
  mensajeForm: {
    type: String
  }
});

export const PostventaForm = mongoose.model<IPostventa>(
  'PostventaForm',
  PostventaSchema
);
