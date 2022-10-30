import { AlertColor } from '@mui/lab';
import React, { Dispatch, SetStateAction } from 'react';

interface JobProps {
  handelClose: () => void,
  showModel: boolean,
  jobsUnoccupied: Job[],
  setJobsUnoccupied: Dispatch<SetStateAction<JobSearch[]>>,
}

interface FilterProps {
  category: string,
  changeCategory: (cate: any) => void,
  priceChange: (data: any) => void,
  iconChange: (checked: any) => void,
  price: number
}

interface Job {
  id: number,
  title: string,
  description: string,
  budget: number,
  proposals: object,
  userId: number,
  isOccupied: boolean,

}

interface JobPropsCard {
  job: Job,
  children: React.ReactElement,
  deleteItem?: (idItem: number) => void,
}

interface JobDetails {
  title: string
  category: string,
  duration: string,
  description: string,
  budget: number
}
interface PropsJobDetails {
  job: JobDetails
}

interface CategoryProps {
  imgUrl: string,
  title: string,
  desc: string,
  alt: string
}
interface ProposalProps {
  proposalText: string
  proposalAttachment: string
}

interface Proposal {
  id: number
  description: string,
  attachments: string,
  isAccepted: boolean,
  jobId: number,
  freelancerId: number,
  createdAt: string,
  updatedAt: string,
  job?: {
    title: string
  }
  freelancer?: {
    id: number,
    userId: number,
    user: {
      name: string,
    },
  },

}
interface PropsProposalCard {
  proposal: Proposal
  acceptProposal: (idItem: number, jobId: number) => void,
}

interface TabListInt {
  label: string;
  child: JSX.Element | JSX.Element[] | null;
}
interface PropsTabList {
  tablist: Array<TabListInt>,
}

interface PropsTextEditor {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
  error: boolean
}
interface JobSearch {
  id: number,
  title: string,
  description: string,
  budget: number,
  proposals: [];
  category: string,
  userId: number,
  isOccupied: boolean
}

interface ParamsT {
  budget?: number,
  title?: string,
  category?: string,
  page?: number
}
interface FreelancerInfo {
  name: string
  title: string
  image?: string | null
  major: string
  portfolio: string
  brief: string
}

interface MessageAlert {
  type: AlertColor | undefined
  value: string
  open: boolean
}
interface JobAboutPage {
  title: string
  category: string,
  time: string,
  description: string,
  budget: number,
  user?: User
}
interface User {
  userID: number,
  email: string,
  name: string,
  role: string
}
interface Client {
  email: string,
  id: number,
  name: string,
  role: string,
}
interface PropsJobPage {
  job: JobAboutPage,
  client: Client,
}
type UserContex = {
  user?: User | null,
  setUser?: (user: User) => void,
};
interface Props {
  children: React.ReactNode;
}

interface SignupProps {
  setActiveStep: Dispatch<SetStateAction<number>>,
  userRole: string
}
interface FirstStepProps {
  setUserRole: (role: string)=> void,
  setActiveStep: Dispatch<SetStateAction<number>>
}
export type {
  JobProps,
  FilterProps,
  JobPropsCard,
  PropsJobDetails,
  CategoryProps,
  ProposalProps,
  PropsProposalCard,
  PropsTabList,
  PropsTextEditor,
  Proposal,
  TabListInt,
  JobSearch,
  ParamsT,
  JobAboutPage,
  Client,
  PropsJobPage,
  User,
  UserContex,
  Props,
  FreelancerInfo,
  SignupProps,
  FirstStepProps,
  MessageAlert,
};
