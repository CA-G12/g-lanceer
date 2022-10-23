import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import {
  FormikProps,
  useFormik,
} from 'formik';
import SendIcon from '@mui/icons-material/Send';
import TextEditor from '../TextEditor';
import './style.css';
import { ProposalProps } from '../../interfaces';
import { ProposalSchema } from '../../validation';

function ProposalForm() {
  const formik: FormikProps<ProposalProps> = useFormik<ProposalProps>({
    initialValues: {
      proposalText: '',
      proposalAttachment: '',
    },
    validationSchema: ProposalSchema,
    onSubmit: (values: ProposalProps) => {
      console.log(values);
      setTimeout(() => {
        formik.setSubmitting(false);
        formik.resetForm();
      }, 3000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="proposal-form">
        <div className="proposal-text">
          <h2 className="proposal-form-heading">Proposal</h2>
          <TextEditor
            error={!!(formik.errors.proposalText && formik.touched.proposalText)}
            value={formik.values.proposalText}
            setValue={(e) => formik.setFieldValue('proposalText', e)}
          />
          {!!(formik.errors.proposalText
            && formik.touched.proposalText)
            && <small style={{ color: '#d32f2f' }}>{formik.errors.proposalText}</small>}
        </div>
        <div className="proposal-attachment">
          <h2 className="proposal-form-heading">Attachments</h2>
          <TextField
            fullWidth
            name="proposalAttachment"
            id="proposalAttachment"
            label="Enter Your Attachments link"
            onChange={formik.handleChange}
            variant="outlined"
            onBlur={formik.handleBlur}
            value={formik.values.proposalAttachment}
            helperText={
              formik.errors.proposalAttachment
                ? formik.errors.proposalAttachment
                : 'optional'
            }
            error={
              !!(formik.errors.proposalAttachment)
            }
          />
        </div>
        <LoadingButton
          type="submit"
          endIcon={<SendIcon />}
          loading={formik.isSubmitting}
          loadingPosition="end"
          variant="contained"
          className={formik.isSubmitting ? 'submitProposal loading' : 'submitProposal '}
        >
          {formik.isSubmitting ? 'Sending' : 'Apply'}
        </LoadingButton>
      </div>
    </form>
  );
}

// </Formik >

export default ProposalForm;
