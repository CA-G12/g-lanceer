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

const updateFreelancerValidation = yup.object().shape({
  name: yup.string()
    .optional()
    .min(1, 'name must not be Empty'),
  major: yup.string()
    .optional()
    .min(1, 'major must not be Empty'),
  title: yup.string()
    .optional()
    .min(1, 'title must not be Empty'),
  portfolio: yup.string()
    .nullable()
    .optional()
    .min(5, 'portfolio must be more than 5 characters long')
    .url('portfolio should be a valid URL'),
});

export {
  queryValidation,
  queryJobValidation,
  postProposalValidation,
  addJobValidation,
  updateFreelancerValidation,
};
