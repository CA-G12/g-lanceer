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
const loginValidation = yup.object().shape({
  password: yup.string().required().min(8),
  email: yup.string().required().email(),
});

export {
  queryValidation, queryJobValidation, postProposalValidation, addJobValidation, loginValidation,
};
