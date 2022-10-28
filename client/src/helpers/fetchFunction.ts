import axios from 'axios';
import { FreelancerInfo } from '../interfaces';

const getJobs = async (url: string, config: any) => {
  const data = await axios.get(url, config);
  return data;
};
const getFreelancerData = async (id: number) => {
  const data = await axios.get(`/api/v1/freelancer/${id}`);
  return data;
};
const updateFreelancerData = async (data: FreelancerInfo) => {
  const res = await axios.put('/api/v1/freelancer', data);
  return res;
};
const destroyProposal = async (id: number) => {
  await axios.delete(`/api/v1/proposals/${id}`);
};
export {
  getJobs, getFreelancerData, updateFreelancerData, destroyProposal,
};
