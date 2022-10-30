import axios from 'axios';

const getJobs = async (url: string, config: any) => {
  const data = await axios.get(url, config);
  return data;
};
const login = async (values: {
  email: string
  password: string
}) => {
  const res = await axios.post('api/v1/auth/login', values);
  return res;
};
export { getJobs, login };
