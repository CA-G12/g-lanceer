import * as yup from 'yup';

const jobSchema = yup.object({
  title: yup.string().min(15, 'Too Short!').required('Job Title Required'),
  budget: yup.number().min(5).required('Budget Required'),
  time: yup.string().min(5, 'Too Short!').required('Time Required'),
  category: yup.string().required('category required'),
  description: yup.string().min(20, 'Too Short!').required('Job Description Title Required'),
});

const loginSchema = yup.object({
  email: yup.string().email().min(8, 'Too Short!').required('Email Required!'),
  password: yup.string().min(8).required('Password Required!'),
});

const ProposalSchema = yup.object({
  proposalText: yup.string()
    .min(15, 'Too Short!')
    .required('Proposal must not be Empty'),
  proposalAttachment: yup.string()
    .nullable()
    .optional()
    .min(5, 'Attachments must be more than 5 characters long')
    .url('Attachment should be a valid URL'),
});
const userInfoSchema = yup.object({
  name: yup.string()
    .required('Name must not be Empty'),
  major: yup.string()
    .required('major must not be Empty'),
  title: yup.string()
    .required('title must not be Empty'),
  portfolio: yup.string()
    .nullable()
    .optional()
    .min(5, 'portfolio must be more than 5 characters long')
    .url('portfolio should be a valid URL'),
});

export {
  jobSchema, ProposalSchema, userInfoSchema, loginSchema,
};
