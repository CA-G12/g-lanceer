// import Joi from 'joi';

// const queryValidation = Joi.object({
//   title: Joi.string(),
//   budget: Joi.number(),
//   page: Joi.number(),
// });

import * as yup from 'yup';

const queryValidation = yup.object().shape({
  title: yup.string(),
  budget: yup.number(),
  page: yup.number(),
});

const queryJobValidation = yup.object().shape({
  id: yup.number(),
});

export { queryValidation, queryJobValidation };
