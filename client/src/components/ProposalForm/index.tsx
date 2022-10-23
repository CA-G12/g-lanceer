import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import {
  TextField, Stack, Snackbar, Alert,
} from '@mui/material';
import axios from 'axios';
import {
  FormikProps,
  useFormik,
} from 'formik';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import TextEditor from '../TextEditor';
import './style.css';
import { ProposalProps } from '../../interfaces';
import { ProposalSchema } from '../../validation';

function ProposalForm() {
  const [apiError, setApiError] = useState(false);
  const [apiResponse, setApiResponse] = useState(false);
  const { id } = useParams();
  const formik: FormikProps<ProposalProps> = useFormik<ProposalProps>({
    initialValues: {
      proposalText: '',
      proposalAttachment: '',
    },
    validationSchema: ProposalSchema,
    onSubmit: async (values: ProposalProps) => {
      try {
        await axios.post('/api/v1/proposals', {
          jobId: id,
          description: values.proposalText,
          attachments: values.proposalAttachment,
        });
        formik.resetForm();
        setApiResponse(true);
        setApiError(false);
      } catch (err) {
        setApiError(true);
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  return (
    <>
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
            id="submit"
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
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={apiError}
          onClose={() => setApiError(false)}
          autoHideDuration={6000}
        >
          <Alert severity="error">
            Something went Wrong, Try Again later!
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={apiResponse}
          onClose={() => setApiResponse(false)}
          autoHideDuration={6000}
        >
          <Alert severity="success">
            proposal submitted successfully!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}

export default ProposalForm;
