import mongoose, { Schema, Document } from 'mongoose';

export interface IPostventa extends Document {
  date: Date;
  nombreForm: string;
  emailForm: string;
  direccionForm: string;
  comunaForm: string;
  telefonoForm: string;
  mensajeForm: string;
}

const postventaSchema = new Schema({
  date: {
    type: Date,
    default: new Date()
  },
  nombreForm: {
    type: String
  },
  emailForm: {
    type: String
  },
  direccionForm: {
    type: String
  },
  telefonoForm: {
    type: String
  },
  comunaForm: {
    type: String
  },
  mensajeForm: {
    type: String
  }
});

export const PostventaForm = mongoose.model<IPostventa>(
  'PostventaForm',
  postventaSchema
);
