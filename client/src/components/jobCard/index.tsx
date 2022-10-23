/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button, Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { JobPropsCard, Proposal } from '../../interfaces';
import ProposalJob from '../proposalJob';

function JobCard({ job, id, userRole }: JobPropsCard) {
  const {
    title, description, budget, proposals,
  } = job;
  const navigate = useNavigate();
  let proposalChild: React.ReactElement | null = null;
  if (proposals) {
    proposalChild = (
      <>
        {
          proposals.map((ele: Proposal, i) => (
            <div style={{ marginBottom: '1rem' }} key={i * 2}>
              <ProposalJob
                proposal={
                  {
                    username: 'freelancer name',
                    description: ele.description,
                    attachments: ele.attachments,
                  }
                }
              />
            </div>
          ))
        }
      </>
    );
  }
  return (
    <div className="content">
      <div className="job-card">
        <Link to="/job/jobid">
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
          >
            {title}
          </Typography>
          <div className="description">
            {description}
          </div>
        </Link>
        <div className="second-section">
          {userRole === 'client' ? (
            <Accordion disabled={!proposals.length}>
              <AccordionSummary>
                <div className="budget-proposal-section budget-proposal-client ">
                  <div className="proposals">
                    proposals:
                    <span>
                      {' '}
                      {proposals.length}
                    </span>
                  </div>
                  <div className="budget">
                    budget:
                    <span>
                      $
                      {budget}
                    </span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {
                  proposalChild
                }
              </AccordionDetails>
            </Accordion>
          ) : (
            <div className="budget-proposal-section">
              <div className="proposals">
                proposals:
                <span>
                  {' '}
                  {proposals.length}
                </span>
              </div>
              <div className="budget">
                budget:
                <span>
                  $
                  {budget}
                </span>
              </div>
              <Button
                style={{
                  fontSize: '12px',
                  borderRadius: '20px',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
                onClick={() => navigate(`/job/${id}`)}
                variant="contained"
              >
                Apply Now
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>

  );
}

export default JobCard;
