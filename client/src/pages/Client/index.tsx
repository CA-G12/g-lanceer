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
  username: 'Ahmed Safi',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quis soluta ipsa minima.',
  attachments: 'https://www.freelancer.com/u/eTranslators?w=f&ngsw-bypass=',
};

const proposals = [
  {
    // translate job
    description:
      'Hi there,We would like to translate your text from Polish to English and provide you with high quality professional translation service.We have worked on several similar projects in past. We are the leading translation agency of this website with 9 years of experience.',
    attachments: 'https://www.freelancer.com/u/eTranslators?w=f&ngsw-bypass=',
    freelancerId: 1,
    isAccepted: false,
    jobId: 6,
  },
  {
    // animation job
    description:
      'Hello I have reviewed your job description and completely understand your requirement for I need a cartoon/animation artist. I can start working on your project immediately.I have expertise in area of After Effects, Graphic Design, Photoshop, Animation and Logo Design',
    attachments: 'https://www.freelancer.com/u/MetaDesignIndia',
    isAccepted: false,
    freelancerId: 5,
    jobId: 7,
  },

];

const job = {

  // 9
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

      <JobCard job={job} id={5}>
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
