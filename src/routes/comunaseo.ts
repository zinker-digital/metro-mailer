import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import { RequestComuneseoType } from '../types';
import emailTransporter from '../email';
import { eventEmitter } from '../events';
import { validationHandler } from '../utils/middlewares/validation-handler';
import { communeseoSchema } from '../utils/schemas/comunaseo';

export default function comunaseoApi(app: Express) {
  const router = Router();
  app.use('/api/v1/comunaseo', router);

  router.post(
    '/',
    validationHandler(communeseoSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      const body = req.body as RequestComuneseoType;
      if (!body.comunaseo) {
        return res.json(boom.notFound('Invalid request'));
      }

      try {
        const mailer = await emailTransporter(body, 'comunaseo');
        eventEmitter.emit('comunaseo', body);
        return res.status(200).json(mailer);
      } catch (err) {
        next(err);
      }
    }
  );
}
