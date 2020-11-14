import Joi from '@hapi/joi';

export const responseSchema = Joi.array().items(
  Joi.object({
    id: Joi.string().required(),
    text: Joi.string().required(),
  }),
);
