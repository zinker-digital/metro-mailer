import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';

import config from '../../config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withErrorStack(error: any, stack: any) {
  if (config.dev) {
    return { ...error, stack };
  }
  return error;
}

function logErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  next(err);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrapErrors(err: any, req: Request, res: Response, next: NextFunction) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  const {
    output: { statusCode, payload }
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

export { logErrors, wrapErrors, errorHandler };
