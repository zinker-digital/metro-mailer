import { Express, NextFunction, Request, Response, Router } from 'express';
import boom from '@hapi/boom';

import { mailerComuna, mailerReply } from '../nodemailer.controller';
import { RequestMailerType } from '../types';

export default function comunaseoApi(app: Express) {
  const router = Router();
  app.use('/api/v1/comunaseo', router);

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as RequestMailerType;
    if (body.formType !== 'comunaseo' || !body.comuna) {
      return res.json(boom.notFound('Invalid request'));
    }

    let result = {
      mailerProject: {
        success: false
      },
      mailerReply: {
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
      const reply = await mailerReply(body);
      if (reply?.isSuccess) {
        result = {
          ...result,
          mailerReply: {
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
