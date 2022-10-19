import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField, InputLabel, FormControl, Select, MenuItem, FormHelperText, Button, Modal,
} from '@mui/material';
import './style.css';
import data from '../../categoris';

const jobSchema = yup.object({
  jobTitle: yup.string().min(15, 'Too Short!').required('Job Title Required'),
  budget: yup.number().min(5).required('Budget Required'),
  time: yup.string().min(5, 'Too Short!').required('Time Required'),
  category: yup.string().required('category required'),
  jobDescription: yup.string().min(20, 'Too Short!').required('Job Description Title Required'),
});

interface JobProps {
  handelClose: ()=> void,
  showModel: boolean
}

function JobForm({ handelClose, showModel }: JobProps) {
  const formik = useFormik({
    initialValues: {
      title: '',
      budget: '',
      time: '',
      category: '',
      description: '',
    },
    validationSchema: jobSchema,
    onSubmit: (values) => {
      console.log(values, 'valuessss');
      formik.resetForm();
    },
  });
  return (
    <Modal
      open={showModel}
      onClose={handelClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={formik.handleSubmit} className="job-from">
        <TextField
          className="text-filed"
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.errors.title ? formik.errors.title : ' '}
          label="Job Title"
          name="title"
          id="title"
          value={formik.values.title}
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
            {data.map((ele) => <MenuItem key={ele.name} value={ele.name}>{ele.name}</MenuItem>)}
          </Select>
          <FormHelperText style={{ color: '#D32F2F' }}>
            {formik.errors.category ? formik.errors.category : ' '}
          </FormHelperText>
        </FormControl>
        <TextField
          className="text-area"
          error={formik.touched.description && Boolean(formik.errors.description)}
          name="description"
          id="description"
          helperText={formik.errors.description ? formik.errors.description : ' '}
          label="Job Description"
          multiline
          rows={4}
          maxRows={8}
          value={formik.values.description}
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
    </Modal>
  );
}

export default JobForm;
