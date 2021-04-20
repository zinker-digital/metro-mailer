import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import emailTransporter from '../email';
import { RequestPostventaType } from '../types';
import { eventEmitter } from '../events';

export default function postventaApi(app: Express) {
  const router = Router();
  app.use('/api/v1/postventa', router);

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as RequestPostventaType;
    if (!body.formCommune) {
      return res.json(boom.notFound('Invalid request'));
    }

    try {
      const mailer = await emailTransporter(body, 'postventa');
      eventEmitter.emit('postventa', body);
      return res.status(200).json(mailer);
    } catch (err) {
      next(err);
    }
  });
}
