import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField, InputLabel, FormControl, Select, MenuItem, FormHelperText, Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import data from '../../categoris';

const jobSchema = yup.object({
  jobTitle: yup.string().min(15, 'Too Short!').required('Job Title Required'),
  budget: yup.number().min(5).required('Budget Required'),
  time: yup.string().min(5, 'Too Short!').required('Time Required'),
  category: yup.string().required('category required'),
  jobDescription: yup.string().min(20, 'Too Short!').required('Job Description Title Required'),
});

function JobForm() {
  const formik = useFormik({
    initialValues: {
      jobTitle: '',
      budget: '',
      time: '',
      category: '',
      jobDescription: '',
    },
    validationSchema: jobSchema,
    onSubmit: (values) => {
      console.log(values, 'valuessss');
      formik.resetForm();
    },
  });
  return (
    <div className="job-popup">
      <form onSubmit={formik.handleSubmit} className="job-from">
        <CloseIcon className="close-icon" />
        <TextField
          className="text-filed"
          error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
          helperText={formik.errors.jobTitle ? formik.errors.jobTitle : ' '}
          label="Job Title"
          name="jobTitle"
          id="jobTitle"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
        />
        <TextField
          className="text-filed"
          error={formik.touched.budget && Boolean(formik.errors.budget)}
          helperText={formik.errors.budget ? formik.errors.budget : ' '}
          label="Budget"
          type="number"
          name="budget"
          id="budget"
          value={formik.values.budget}
          onChange={formik.handleChange}
        />
        <TextField
          className="text-filed"
          error={formik.touched.time && Boolean(formik.errors.time)}
          helperText={formik.errors.time ? formik.errors.time : ' '}
          label="Time"
          name="time"
          id="time"
          value={formik.values.time}
          onChange={formik.handleChange}
        />
        <FormControl style={{ color: '#D32F2F' }}>
          <InputLabel>Category</InputLabel>
          <Select
            className="text-select"
            error={formik.touched.category && Boolean(formik.errors.category)}
            label="Category"
            name="category"
            id="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            {data.map((ele) => <MenuItem value={ele.name}>{ele.name}</MenuItem>)}
          </Select>
          <FormHelperText style={{ color: '#D32F2F' }}>
            {formik.errors.category ? formik.errors.category : ' '}
          </FormHelperText>
        </FormControl>
        <TextField
          className="text-area"
          error={formik.touched.jobDescription && Boolean(formik.errors.jobDescription)}
          name="jobDescription"
          id="jobDescription"
          helperText={formik.errors.jobDescription ? formik.errors.jobDescription : ' '}
          label="Job Description"
          multiline
          rows={4}
          maxRows={8}
          value={formik.values.jobDescription}
          onChange={formik.handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ width: '30%', margin: '0 auto', marginTop: '10px' }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default JobForm;
