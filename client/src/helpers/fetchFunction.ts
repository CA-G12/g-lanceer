import axios from 'axios';

const getJobs = async (url: string, config: any) => {
  const data = await axios.get(url, config);
  return data;
};
export default getJobs;
