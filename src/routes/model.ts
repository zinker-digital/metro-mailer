import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import {
  mailerGlead,
  mailerProject,
  mailerReply
} from '../nodemailer.controller';
import { RequestMailerType } from '../types';

export default function modelApi(app: Express) {
  const router = Router();
  app.use('/api/v1/model', router);

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as RequestMailerType;
    if (!body.formType || !body.modelName || !body.modelUFPrice) {
      return res.json(boom.notFound('Invalid request'));
    }

    let result = {
      mailerProject: {
        success: false
      },
      mailerReply: {
        success: false
      },
      mailerGlead: {
        success: false
      }
    };

    try {
      const mailer = await mailerProject(body);
      if (mailer?.isSuccess) {
        result = {
          ...result,
          mailerProject: {
            success: true
          }
        };
      }
      const reply = await mailerReply(body);
      if (reply?.isSuccess) {
        result = {
          ...result,
          mailerReply: {
            success: true
          }
        };
      }
      const glead = await mailerGlead(body);
      if (glead?.isSuccess) {
        result = {
          ...result,
          mailerGlead: {
            success: true
          }
        };
      }
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });
}
