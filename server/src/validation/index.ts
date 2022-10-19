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
const postProposalValidation = yup.object().shape({
  jobId: yup.number().required(),
  description: yup.string().required().min(15),
  attachments: yup.string().nullable().url(),
});
const addJobValidation = yup.object().shape({
  title: yup.string().required(),
  budget: yup.number().required(),
  time: yup.string().required(),
  category: yup.string().required(),
  description: yup.string().required(),
});

export {
  queryValidation, queryJobValidation, postProposalValidation, addJobValidation,
};
