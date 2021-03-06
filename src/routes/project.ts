import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import emailTransporter from '../email';
import { RequestProjectType } from '../types';
import { eventEmitter } from '../events';
import { validationHandler } from '../utils/middlewares/validation-handler';
import { projectSchema } from '../utils/schemas/project';

export default function projectApi(app: Express) {
  const router = Router();
  app.use('/api/v1/project', router);

  router.post(
    '/',
    validationHandler(projectSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      const body = req.body as RequestProjectType;
      if (!body.projectName || !body.projectUFPrice) {
        return res.json(boom.notFound('Invalid request'));
      }

      try {
        const mailer = await emailTransporter(body, 'project');
        eventEmitter.emit('project', body);
        return res.status(200).send(mailer);
      } catch (err) {
        next(err);
      }
    }
  );
}
