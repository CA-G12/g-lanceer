import { Button, TextField } from '@mui/material';
import {
  Formik, Form, Field, FormikProps,
} from 'formik';
import * as Yup from 'yup';
import TextEditor from '../TextEditor';
import './style.css';

interface Proposal {
  proposalText: string
  proposalAttachment: string
}
const ProposalSchema = Yup.object().shape({
  proposalText: Yup.string()
    .min(15, 'Too Short!')
    .required('Proposal must not be Empty'),
  proposalAttachment: Yup.string()
    .nullable()
    .optional()
    .min(5, 'Attachments must be more than 5 characters long')
    .url('Attachment should be a valid URL'),
});
function ProposalForm() {
  return (
    <Formik
      initialValues={{
        proposalText: '',
        proposalAttachment: '',
      }}
      validationSchema={ProposalSchema}
      onSubmit={(values: Proposal, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {(props: FormikProps<Proposal>) => {
        const {
          values,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
        } = props;
        return (
          <Form>
            <div className="proposal-form">
              <div className="proposal-text">
                <h2 className="proposal-form-heading">Proposal</h2>
                <Field name="proposalText">
                  {({ field }: any) => (
                    <TextEditor
                      error={!!errors.proposalText}
                      value={field.value}
                      setValue={field.onChange(field.name)}
                    />
                  )}
                </Field>
                <small style={{ color: '#d32f2f' }}>{errors.proposalText || ' '}</small>
              </div>
              <div className="proposal-attachment">
                <h2 className="proposal-form-heading">Attachments</h2>
                <TextField
                  fullWidth
                  name="proposalAttachment"
                  id="proposalAttachment"
                  label="Enter Your Attachments link"
                  onChange={handleChange}
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.proposalAttachment}
                  helperText={
                    errors.proposalAttachment
                      ? errors.proposalAttachment
                      : 'optional'
                  }
                  error={
                    !!(errors.proposalAttachment)
                  }
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className="submitProposal"
                disabled={isSubmitting}
              >
                Apply
              </Button>
            </div>
          </Form>
        );
      }}

    </Formik>
  );
}

export default ProposalForm;
