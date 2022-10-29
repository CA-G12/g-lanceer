import {
  Alert, CircularProgress,
  Snackbar,
} from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  FreelancerInfoCard, NotFound, Tabs,
} from '../../components';
import ProposalJob from '../../components/proposalJob';
import UserContext from '../../context';
import { destroyProposal, getFreelancerData } from '../../helpers';
import {
  FreelancerActionsAlerts, FreelancerInfo, Proposal, ProposalProps,
} from '../../interfaces';
import './style.css';

function Freelancer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [freelancerInfo, setFreelancerInfo] = useState<FreelancerInfo | null>(null);
  const [acceptedProposals, setAcceptedProposal] = useState<Proposal[]>([]);
  const [pendingProposals, setPendingProposal] = useState<Proposal[]>([]);
  const [freelancerActionsAlerts, setFreelancerAlerts] = useState<FreelancerActionsAlerts | null>(null);
  const authorize: boolean = user?.userID === Number(id);

  const deleteProposal = async (proposalId: number) => {
    setFreelancerAlerts(null);
    try {
      await destroyProposal(proposalId);
      setPendingProposal(pendingProposals.filter((p: Proposal) => p.id !== proposalId));
      setFreelancerAlerts({ msg: 'Proposal Deleted Successfully', type: 'success' });
    } catch (err) {
      setFreelancerAlerts({ msg: 'Something went Wrong,Try Again later!', type: 'error' });
    }
  };
  const updateProposal = async (proposal: ProposalProps) => {
    setPendingProposal(pendingProposals.map((p: Proposal) => {
      if (p.id === proposal.id) {
        return { ...p, attachments: proposal.attachments, description: proposal.description };
      }
      return p;
    }));
    setFreelancerAlerts({ msg: 'Proposal Updated Successfully', type: 'success' });
  };

  function handleProposalsChanges(proposal: ProposalProps, type: 'delete' | 'update') {
    if (type === 'delete') {
      if (proposal.id) { deleteProposal(proposal.id); }
    } else {
      updateProposal(proposal);
    }
  }

  useEffect(() => {
    const getData = async () => {
      setFreelancerAlerts(null);
      try {
        const { data: { data } } = await getFreelancerData(Number(id));
        const {
          user: { name },
          title,
          image,
          major,
          portfolio,
          brief,
          proposals,
        } = data;
        setFreelancerInfo({
          name,
          title,
          image,
          major,
          portfolio,
          brief,
        });
        setAcceptedProposal(proposals.acceptedProposals);
        setPendingProposal(proposals.pendingProposals || []);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setFreelancerAlerts({ msg: 'Something went Wrong, Try Again later!', type: 'error' });
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress size={80} />
      </div>
    );
  }
  if (!freelancerInfo) {
    return (
      <div className="loading-container">
        <NotFound msg="Freelancer Not Fond" />
      </div>
    );
  }
  const tablist = [{
    label: 'Accepted',
    child: acceptedProposals?.length
      ? acceptedProposals.map((p) => <ProposalJob key={p.id} proposal={p} />)
      : <p style={{ color: 'gray' }}>No Accepted proposals</p>,
  }];

  if (authorize) {
    const pending = {
      label: 'Pending',
      child: pendingProposals?.length
        ? pendingProposals.map((p: Proposal) => (
          <ProposalJob
            key={p.id}
            proposal={p}
            handleProposalsChanges={
              (
                proposal: ProposalProps,
                type: 'delete' | 'update',
              ) => handleProposalsChanges(proposal, type)
            }
          />
        ))
        : <p style={{ color: 'gray' }}>No Pending proposals</p>,
    };
    tablist.push(pending);
  }
  return (
    <div>
      <FreelancerInfoCard initialValues={freelancerInfo} authorize={authorize} setAlerts={setFreelancerAlerts} />
      <div className="proposals-cont">
        <Tabs tablist={tablist} />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!freelancerActionsAlerts}
        onClose={() => setFreelancerAlerts(null)}
        autoHideDuration={6000}
      >
        <Alert severity={freelancerActionsAlerts?.type}>
          {freelancerActionsAlerts?.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Freelancer;
