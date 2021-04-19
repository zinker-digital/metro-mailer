import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import { mailerComuna } from '../nodemailer.controller';
import { RequestMailerType } from '../types';

export default function postventaApi(app: Express) {
  const router = Router();
  app.use('/api/v1/postventa', router);

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as RequestMailerType;
    if (body.formType !== 'postventa' || !body.comuna) {
      return res.json(boom.notFound('Invalid request'));
    }

    let result = {
      mailerProject: {
        success: false
      }
    };

    try {
      const mailer = await mailerComuna(body);
      if (mailer?.isSuccess) {
        result = {
          ...result,
          mailerProject: {
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
