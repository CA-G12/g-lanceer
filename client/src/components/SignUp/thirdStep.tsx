import {
  FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { LoadingButton } from '@mui/lab';
import data from '../../categoris';
import './style.css';
import TextEditor from '../TextEditor';
import { thirdStepValidation } from '../../validation';

function ThirdStepSignUp() {
  const formik = useFormik({
    initialValues: {
      Title: '',
      Major: '',
      portfolio: '',
      description: '',
      image: '',
    },
    validationSchema: thirdStepValidation,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="formDivContainer">
      <form
        className="thirdStepForm"
        onSubmit={formik.handleSubmit}
      >
        <div className="firstPart">

          <TextField
            id="Title"
            name="Title"
            label="Enter your title"
            value={formik.values.Title}
            onChange={formik.handleChange}
            error={formik.touched.Title && Boolean(formik.errors.Title)}
            helperText={formik.touched.Title && formik.errors.Title}
            style={{ marginBottom: '20px' }}
          />
          <FormControl style={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="Major">Major</InputLabel>
            <Select
              id="Major"
              name="Major"
              label="major"
              value={formik.values.Major}
              onChange={formik.handleChange}
              error={formik.touched.Major && Boolean(formik.errors.Major)}
            >
              {data.map((ele) => <MenuItem key={ele.name} value={ele.name}>{ele.name}</MenuItem>)}
            </Select>
            <FormHelperText id="error-text" error>
              {formik.touched.Major && formik.errors.Major}
            </FormHelperText>
          </FormControl>

          <TextField
            id="portfolio"
            name="portfolio"
            label="portfolio"
            value={formik.values.portfolio}
            onChange={formik.handleChange}
            error={formik.touched.portfolio && Boolean(formik.errors.portfolio)}
            helperText={formik.touched.portfolio && formik.errors.portfolio}
            style={{ marginBottom: '20px' }}

          />
          <InputLabel htmlFor="Major">Description</InputLabel>
          <TextEditor
            error={false}
            value={formik.values.description}
            setValue={(e) => formik.setFieldValue('description', e)}

          />
        </div>
        <div className="secondPart">
          <div style={{
            width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          >
            <label
              htmlFor="imageUploder"
              style={{
                minHeight: '65px', display: 'flex', flexDirection: 'column', width: '80%',
              }}
              onChange={formik.handleChange}
            >
              <LoadingButton
                variant="contained"
                component="label"
                style={{
                  backgroundColor: '#EFF0F2',
                  color: '#1C3879',
                  height: '60px',
                  // marginBottom: '15px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                }}
              >
                <CloudUploadIcon />
                Upload image
                <input hidden accept="image/*" multiple type="file" />
              </LoadingButton>
              <FormHelperText id="error-text" error>
                {formik.touched.image && formik.errors.image}
              </FormHelperText>
            </label>
            <div style={{
              borderWidth: '1px', borderStyle: 'dashed', borderColor: '#757571', width: '80%', marginBottom: '20px',
            }}
            >
              <img
                src="https://i.pinimg.com/236x/3e/06/34/3e0634f6079385191c902548435c50ea.jpg"
                alt=""
                style={{ width: '150px', height: '150px', margin: '20px 0px' }}
              />
            </div>
          </div>
          <LoadingButton color="primary" variant="contained" type="submit" style={{ width: '80%', height: '40px' }}>
            Submit
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}
export default ThirdStepSignUp;
