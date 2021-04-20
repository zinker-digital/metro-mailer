import mongoose from 'mongoose';

import config, { configDb } from '../config';

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(
    configDb.uri ? configDb.uri : 'mongodb://localhost/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (info) => {
      if (config.dev) {
        console.log(info);
        console.log('connected');
      }
    }
  );
}

export default dbConnect;
