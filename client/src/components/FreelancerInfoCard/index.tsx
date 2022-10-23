import './style.css';
import {
  Fab, Grid, TextField,
} from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import { FormikProps, useFormik } from 'formik';
import avatar from '../../assets/Avatar.png';
import { FreelancerInfo } from '../../interfaces';
import { userInfoSchema } from '../../validation';

interface Props {
  initialValues: FreelancerInfo
}
function FreelancerInfoCard({ initialValues }: Props) {
  const [editable, setEditable] = useState(false);
  function switchSections() {
    setEditable(!editable);
  }

  const formik: FormikProps<FreelancerInfo> = useFormik<FreelancerInfo>({
    initialValues,
    validationSchema: userInfoSchema,
    onSubmit: (values: FreelancerInfo) => {
      console.log(values);
      setTimeout(() => {
        formik.setSubmitting(false);
        switchSections();
      }, 3000);
    },
  });

  return (
    <div className="freelancer-info-card ">
      <Grid
        overflow="hidden"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{
          sm: 2, md: 2, lg: 2, xl: 0,
        }}
      >
        <Grid xs={10} sm={8} md={6} lg={4} item>
          <div className="freelancer-info-card-img">
            <img src={initialValues.image || avatar} alt="freelancer img" />
          </div>
        </Grid>
        <Grid xs={10} sm={8} md={6} lg={4} item>
          <div className="freelancer-info-card-content">
            {editable ? (
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  disabled={formik.isSubmitting}
                  name="name"
                  className="freelancer-content-input"
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  inputProps={{ style: { fontSize: '26px', color: '#1C3879' } }}
                  style={{ marginBottom: '15px' }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  helperText={
                    !!formik.errors.name
                    && formik.errors.name
                  }
                  error={
                    !!(formik.errors.name)
                  }
                />
                <TextField
                  disabled={formik.isSubmitting}
                  name="major"
                  label="major"
                  className="freelancer-content-input"
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  style={{ marginBottom: '15px' }}
                  inputProps={{ style: { fontSize: '16px', color: '#565b5b' } }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.major}
                  helperText={
                    !!formik.errors.major
                    && formik.errors.major
                  }
                  error={
                    !!(formik.errors.major)
                  }
                />
                <TextField
                  disabled={formik.isSubmitting}
                  name="portfolio"
                  label="portfolio"
                  className="freelancer-content-input"
                  id="standard-basic"
                  variant="standard"
                  inputProps={{ style: { fontSize: '16px', color: '#565b5b' } }}
                  fullWidth
                  style={{ marginBottom: '18px' }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.portfolio}
                  helperText={
                    !!formik.errors.portfolio
                    && formik.errors.portfolio
                  }
                  error={
                    !!(formik.errors.portfolio)
                  }
                />
                <TextField
                  disabled={formik.isSubmitting}
                  name="brief"
                  label="brief"
                  className="freelancer-content-input"
                  placeholder="MultiLine with rows: 2 and rowsMax: 4"
                  multiline
                  maxRows={8}
                  fullWidth
                  inputProps={{ style: { fontSize: '16px', color: '#565b5b' } }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.brief}
                  helperText={
                    !!formik.errors.brief
                    && formik.errors.brief
                  }
                  error={
                    !!(formik.errors.brief)
                  }
                />
                <LoadingButton
                  type="submit"
                  endIcon={<SaveIcon />}
                  loading={formik.isSubmitting}
                  loadingPosition="end"
                  variant="contained"
                  id="card-edit-btn"
                  style={{ backgroundColor: '#7B1FA2' }}
                >
                  {formik.isSubmitting ? 'Saving' : 'Save'}
                </LoadingButton>
                <LoadingButton
                  type="button"
                  endIcon={<CloseIcon />}
                  onClick={() => {
                    formik.resetForm();
                    switchSections();
                  }}
                  variant="contained"
                  id="card-edit-btn"
                  style={{ backgroundColor: 'red', bottom: '70px', width: '91px' }}
                >
                  Cancel
                </LoadingButton>

              </form>
            ) : (

              <div>
                <Fab
                  color="secondary"
                  id="card-edit-btn"
                  aria-label="edit"
                  onClick={() => switchSections()}
                  style={{ transform: 'scale(.9)' }}
                >
                  <EditIcon />
                </Fab>
                <h3 className="freelancer-name">{formik.values.name}</h3>
                <p className="freelancer-major">{formik.values.major}</p>
                <p className="freelancer-portfolio"><a href={formik.values.portfolio}>Portfolio</a></p>
                <p className="freelancer-brief">{formik.values.brief}</p>
              </div>
            )}

          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FreelancerInfoCard;
