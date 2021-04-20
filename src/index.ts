import express, { Request, Response } from 'express';
import compression from 'compression';

import {
  logErrors,
  wrapErrors,
  errorHandler
} from './utils/middlewares/error-handlers';
import { notFoundHandler } from './utils/middlewares/not-found-handler';
import config from './config';
import projectApi from './routes/project';
import comunaseoApi from './routes/comunaseo';
import modelApi from './routes/model';
import postventaApi from './routes/postventa';
import projectFloatApi from './routes/project-float';

const app = express();
app.use(express.json());
app.use(compression());

app.get('/', (_req: Request, res: Response) => {
  res.send('oops!');
});

projectApi(app);
projectFloatApi(app);
comunaseoApi(app);
modelApi(app);
postventaApi(app);

app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(
    `This application is listening at http://localhost:${config.port}`
  );
});
