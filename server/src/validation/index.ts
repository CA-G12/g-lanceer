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

export { queryValidation, queryJobValidation, postProposalValidation };
