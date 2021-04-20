import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import emailTransporter from '../email';
import { RequestProjectFloatType } from '../types';
import { eventEmitter } from '../events';
import { validationHandler } from '../utils/middlewares/validation-handler';
import { projectFloatSchema } from '../utils/schemas/project-float';

export default function projectFloatApi(app: Express) {
  const router = Router();
  app.use('/api/v1/project-float', router);

  router.post(
    '/',
    validationHandler(projectFloatSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      const body = req.body as RequestProjectFloatType;
      if (!body.projectName || !body.projectUFPrice) {
        return res.json(boom.notFound('Invalid request'));
      }

      try {
        const mailer = await emailTransporter(body, 'projectFloat');
        eventEmitter.emit('projectFloat', body);
        return res.status(200).send(mailer);
      } catch (err) {
        next(err);
      }
    }
  );
}
