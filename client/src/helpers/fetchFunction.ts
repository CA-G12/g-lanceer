import axios from 'axios';

interface Credentials {
  email: string
  password: string
}
const getJobs = async (url: string, config: any) => {
  const data = await axios.get(url, config);
  return data;
};
const login = async (credentials: Credentials) => {
  const res = await axios.post('api/v1/auth/login', credentials);
  return res;
};
export { getJobs, login };
