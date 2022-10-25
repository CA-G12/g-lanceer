/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Button,
} from '@mui/material';
import { JobCard, JobForm } from '../../components';
import ProposalJob from '../../components/proposalJob/index';
import { Proposal } from '../../interfaces';

const proposal: Proposal = {
  id: 1,
  description: 'Hi there,We would like to translate your text from Polish to English and provide you with high quality professional translation service.We have worked on several similar projects in past. We are the leading translation agency of this website with 9 years of experience.',
  attachments: 'https://www.freelancer.com/u/eTranslators?w=f&ngsw-bypass=',
  isAccepted: true,
  jobId: 6,
  freelancerId: 1,
  createdAt: '2022-10-25T07:51:50.064Z',
  updatedAt: '2022-10-25T07:51:50.064Z',
  job: {
    title: 'Back End Developer',
  },
  freelancer: {
    id: 1,
    userId: 1,
    user: {
      name: 'Ahmed',
    },
  },
};

const proposals = [
  proposal, proposal,
];

const job = {

  // 9
  id: 6,
  title:
    'I need someone clean up a voice recording from static noise and other background noises',
  description:
    'I have voice recordings I can’t hear clearly sone words are clear I need someone boost up the voices remove static background noice so voices can clearly be herd',
  // category: 'Music & Audio',
  budget: 900,
  // time: '2 months',
  // isOccupied: false,
  // userId: 4,
  proposals,

};

function Client() {
  const { id } = useParams();
  const [showModel, setShowModel] = useState(false);
  const handleOpen = () => setShowModel(true);
  const handleClose = () => setShowModel(false);
  return (
    <div>
      <h1>
        client
        {id}
      </h1>
      <Button onClick={handleOpen}>Open modal</Button>
      <JobForm showModel={showModel} handelClose={handleClose} />

      <JobCard job={job}>
        <Accordion disabled={!proposals.length}>
          <AccordionSummary>
            <div className="budget-proposal-section budget-proposal-client ">
              <div className="proposals">
                proposals:
                <span>
                  {job.proposals.length}
                </span>
              </div>
              <div className="budget">
                budget:
                <span>
                  $
                  {job.budget}
                </span>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <ProposalJob proposal={proposal} />
            <ProposalJob proposal={proposal} />

          </AccordionDetails>
        </Accordion>
      </JobCard>
    </div>
  );
}

export default Client;
