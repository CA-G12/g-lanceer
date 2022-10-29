import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import {
  TextField, Stack, Snackbar, Alert,
} from '@mui/material';
import {
  FormikProps,
  useFormik,
} from 'formik';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import TextEditor from '../TextEditor';
import './style.css';
import { ProposalFormProps, ProposalProps } from '../../interfaces';
import { ProposalSchema } from '../../validation';
import { addOrUpdateProposal } from '../../helpers';

function ProposalForm({
  initialValue, type, handleUpdate,
}: ProposalFormProps) {
  const [apiError, setApiError] = useState(false);
  const [apiResponse, setApiResponse] = useState(false);
  const { id } = useParams();
  const formik: FormikProps<ProposalProps> = useFormik<ProposalProps>({
    initialValues: initialValue || {
      description: '',
      attachments: '',
    },
    validationSchema: ProposalSchema,
    onSubmit: async (values: ProposalProps) => {
      const jobId = Number(id);
      const proposalId = initialValue?.id;
      try {
        // send api request to insert or update the proposal
        await addOrUpdateProposal(type, values, jobId, proposalId);
        // handle changes in pendingProposals state
        if (type === 'update' && handleUpdate) handleUpdate(values);
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
              error={!!(formik.errors.description && formik.touched.description)}
              value={formik.values.description}
              setValue={(e) => formik.setFieldValue('description', e)}
            />
            {!!(formik.errors.description
              && formik.touched.description)
              && <small style={{ color: '#d32f2f' }}>{formik.errors.description}</small>}
          </div>
          <div className="proposal-attachment">
            <h2 className="proposal-form-heading">Attachments</h2>
            <TextField
              fullWidth
              name="attachments"
              id="attachments"
              label="Enter Your Attachments link"
              onChange={formik.handleChange}
              variant="outlined"
              onBlur={formik.handleBlur}
              value={formik.values.attachments}
              helperText={
                formik.errors.attachments
                  ? formik.errors.attachments
                  : 'optional'
              }
              error={
                !!(formik.errors.attachments)
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
            {formik.isSubmitting ? 'Sending' : type.toUpperCase()}
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
            {type === 'apply' ? 'proposal submitted successfully!' : 'proposal updated successfully!'}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}
export default ProposalForm;
