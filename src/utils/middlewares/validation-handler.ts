import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import boom from '@hapi/boom';

function validate(data: Record<string, string>, schema: Schema) {
  const { error } = schema.validate(data);
  return error;
}

export function validationHandler(schema: Schema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const error = validate(req['body'], schema);

    error ? next(boom.badRequest(error.message)) : next();
  };
}
