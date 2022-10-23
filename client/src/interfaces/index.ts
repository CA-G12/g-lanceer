interface JobProps {
  handelClose: ()=> void,
  showModel: boolean
}

interface FilterProps {
  category: string,
  changeCategory: (cate: any) => void,
  priceChange: (data: any) => void,
  iconChange: (checked: any) => void,
  price: number
}

interface Job {
  title: string,
  description: string,
  budget: number,
  proposals: []
}

interface JobPropsCard {
  job: Job,
  id: number,
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
  username: string
  description: string,
  attachments: string,
}
interface PropsProposalCard {
  proposal:Proposal
}

interface TabListInt {
  label: string;
  child: JSX.Element | JSX.Element[];
}
interface PropsTabList {
  tablist: Array<TabListInt>,
}

interface PropsTextEditor {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
  error: boolean
}

interface JobAbout {
  title: string
  category: string,
  duration: string,
  description: string,
  budget: number
}

interface JobSearch {
  id: number,
  title: string,
  description: string,
  budget: number,
  proposals: [];
  category: string,
}

interface ParamsT {
  budget?: number,
  title?: string,
  category?: string,
  page?: number
}

export type {
  JobProps, FilterProps, JobPropsCard, PropsJobDetails, CategoryProps,
  ProposalProps, PropsProposalCard, PropsTabList,
  PropsTextEditor, Proposal, JobAbout, TabListInt, JobSearch, ParamsT,
};
