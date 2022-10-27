import * as yup from 'yup';
import {
  Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import data from '../../categoris';
import './style.css';

const validationSchema = yup.object({
  Title: yup
    .string()
    .required('Title is required'),
  Major: yup
    .string()
    .required('Major is required'),
  portfolio: yup
    .string()
    .required('portfolio is required'),
  description: yup
    .string()
    .required('description is required'),
  image: yup
    .string()
    .required('image is required'),

});

function ThirdStepSignUp() {
  const formik = useFormik({
    initialValues: {
      Title: '',
      Major: '',
      portfolio: '',
      description: '',
      image: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values.Major);
      formik.resetForm();
    },
  });

  return (
    <div className="formDivContainer">
      <h3>Welcome to Form</h3>
      <form
        className="thirdStepForm"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          id="Title"
          name="Title"
          label="Enter your title"
          value={formik.values.Title}
          onChange={formik.handleChange}
          error={formik.touched.Title && Boolean(formik.errors.Title)}
          helperText={formik.touched.Title && formik.errors.Title}
          style={{ marginBottom: '15px', width: '400px' }}
        />
        <FormControl style={{ width: '400px', marginBottom: '10px' }}>
          <InputLabel htmlFor="major">Major</InputLabel>
          <Select
            defaultValue=""
            id="major"
            name="major"
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
          style={{ marginBottom: '10px', width: '400px' }}

        />
        <TextField
          id="description"
          name="description"
          label="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          style={{ marginBottom: '10px', width: '400px' }}

        />
        <label
          htmlFor="imageUploder"
          style={{
            minHeight: '65px', width: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          onChange={formik.handleChange}
        >
          <Button
            variant="contained"
            component="label"
            style={{
              backgroundColor: '#EFF0F2',
              color: '#1C3879',
              height: '60px',
              // marginBottom: '15px',
              width: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <CloudUploadIcon />
            Upload image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <FormHelperText id="error-text" error>
            {formik.touched.image && formik.errors.image}
          </FormHelperText>
        </label>
        <img
          src="https://i.pinimg.com/236x/3e/06/34/3e0634f6079385191c902548435c50ea.jpg"
          alt=""
          style={{ width: '250px', height: '250px', margin: '10px 0px' }}
        />
        <div style={{
          display: 'flex', flexDirection: 'row', margin: 'auto',
        }}
        >
          <Button color="primary" variant="contained" type="submit" style={{ width: '200px', height: '50px' }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
export default ThirdStepSignUp;
