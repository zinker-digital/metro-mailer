import express, { Request, Response } from 'express';
import exphbs from 'express-handlebars';

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

const app = express();
app.use(express.json());
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', (req: Request, res: Response) => {
  res.send('oopS!');
});

projectApi(app);
comunaseoApi(app);
modelApi(app);
postventaApi(app);

app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(
    `this application is listening at http://localhost:${config.port}`
  );
});
