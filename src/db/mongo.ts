import mongoose from 'mongoose';

import { configDb } from '../config';

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(
    configDb.uri || 'mongodb://localhost/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    },
    () => {
      console.log('connected');
    }
  );
}

export default dbConnect;
