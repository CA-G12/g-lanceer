import {
  Alert, AlertColor, CircularProgress, Snackbar,
} from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FreelancerInfoCard, NotFound, Tabs } from '../../components';
import ProposalJob from '../../components/proposalJob';
import UserContext from '../../context';
import { getFreelancerData } from '../../helpers';
import { FreelancerInfo, Proposal } from '../../interfaces';
import './style.css';

function Freelancer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [actionStatue, setActionStatue] = useState<{
    open: boolean,
    msg: string,
    type: AlertColor
  } | null>({ open: false, msg: '', type: 'info' });
  const { user } = useContext(UserContext);
  const authorize: boolean = user?.userID === Number(id);
  const [freelancerInfo, setFreelancerInfo] = useState<FreelancerInfo | null>(null);
  const [acceptedProposals, setAcceptedProposal] = useState<Proposal[]>([]);
  const [pendingProposals, setPendingProposal] = useState<Proposal[]>([]);
  useEffect(() => {
    const getData = async () => {
      setActionStatue(null);
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
        setActionStatue({ open: true, msg: 'Something went Wrong, Try Again later!', type: 'error' });
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
  if (!freelancerInfo) return <div className="loading-container"><NotFound msg="Freelancer Not Fond" /></div>;
  const tablist = [{
    label: 'Accepted',
    child: acceptedProposals?.length
      ? acceptedProposals.map((p) => <ProposalJob proposal={p} />)
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
            setProposals={setPendingProposal}
            pendingProposal={pendingProposals}
            setActionStatue={setActionStatue}
          />
        ))
        : <p style={{ color: 'gray' }}>No Pending proposals</p>,
    };
    tablist.push(pending);
  }
  return (
    <div>
      <FreelancerInfoCard initialValues={freelancerInfo} authorize={authorize} setAlerts={setActionStatue} />
      <div className="proposals-cont">
        <Tabs tablist={tablist} />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={actionStatue?.open}
        onClose={() => setActionStatue(null)}
        autoHideDuration={6000}
      >
        <Alert severity={actionStatue?.type}>
          {actionStatue?.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Freelancer;
