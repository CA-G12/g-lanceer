import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
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
    },
  });
  console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="job-from">
        <TextField
          error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
          helperText={formik.errors.jobTitle ? formik.errors.jobTitle : ' '}
          label="Job Title"
          name="jobTitle"
          id="jobTitle"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
        />
        <TextField
          error={formik.touched.budget && Boolean(formik.errors.budget)}
          helperText={formik.touched.budget && formik.errors.budget}
          label="Budget"
          type="number"
          name="budget"
          id="budget"
          value={formik.values.budget}
          onChange={formik.handleChange}
        />
        <TextField
          error={formik.touched.time && Boolean(formik.errors.time)}
          helperText={formik.touched.time && formik.errors.time}
          label="Time"
          name="time"
          id="time"
          value={formik.values.time}
          onChange={formik.handleChange}
        />
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select
            error={formik.touched.category && Boolean(formik.errors.category)}
            label="Category"
            style={{ color: '#D32F2F' }}
            name="category"
            id="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            {data.map((ele) => <MenuItem value={ele.name}>{ele.name}</MenuItem>)}
          </Select>
          <FormHelperText style={{ color: '#D32F2F' }}>
            {formik.touched.category && formik.errors.category}
          </FormHelperText>
        </FormControl>
        <TextField
          error={formik.touched.jobDescription && Boolean(formik.errors.jobDescription)}
          name="jobDescription"
          id="jobDescription"
          helperText={formik.touched.jobDescription && formik.errors.jobDescription}
          label="Job Description"
          multiline
          rows={4}
          maxRows={8}
          value={formik.values.jobDescription}
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit" style={{ width: '30%', margin: '0 auto' }}>Submit</Button>
      </form>
    </div>
  );
}

export default JobForm;
