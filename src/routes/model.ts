import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import emailTransporter from '../email';
import { RequestModelType } from '../types';
import { eventEmitter } from '../events';
import { validationHandler } from '../utils/middlewares/validation-handler';
import { modelSchema } from '../utils/schemas/model';

export default function modelApi(app: Express) {
  const router = Router();
  app.use('/api/v1/model', router);

  router.post(
    '/',
    validationHandler(modelSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      const body = req.body as RequestModelType;
      if (!body.modelName || !body.modelUFPrice) {
        return res.json(boom.notFound('Invalid request'));
      }

      try {
        const mailer = await emailTransporter(body, 'model');
        eventEmitter.emit('model', body);
        return res.status(200).json(mailer);
      } catch (err) {
        next(err);
      }
    }
  );
}
