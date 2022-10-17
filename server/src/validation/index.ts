import Joi from 'joi';

const queryValidation = Joi.object({
  title: Joi.string(),
  budget: Joi.number(),
  page: Joi.number(),
});

export default queryValidation;
