import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CircularProgress, Pagination, Stack, Snackbar, Alert, TextField, Button,
} from '@mui/material';
import { Tabs, JobCard, Filter } from '../../components';
import './style.css';
import { getJobs } from '../../helpers';
import { JobSearch, ParamsT, TabListInt } from '../../interfaces';
import UserContext from '../../context';

function JobsSearch() {
  const { state } = useLocation();
  const navigate = useNavigate();
  // states
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [jobsCount, setJobsCount] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [jobs, setJobs] = useState<JobSearch[]>([]); //
  const [budget, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>(state?.category || '');
  const [title, setTitle] = useState<string>('');

  const { user } = useContext(UserContext);
  const changeCategory: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCategory(e.target.value);
  };
  const priceChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrice(Number(e.target.value));
  };
  const valueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const iconChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    setCategory('');
  };
  useEffect(() => {
    const params: ParamsT = {};

    if (budget) {
      params.budget = budget;
    }
    if (category) {
      params.category = category;
    }
    if (title) {
      params.title = title;
    }
    if (page) {
      params.page = page;
    }

    const getData = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await getJobs('/api/v1/jobs', { params });
        setLoading(false);
        const { rows, count } = data.data;
        setJobs(rows);
        setJobsCount(count);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };

    getData();
  }, [budget, category, title, page]);

  // tabchild for most popular tab
  let tabChild: React.ReactElement | null = null;
  if (loading) {
    tabChild = (
      <div className="spinner">
        <CircularProgress color="inherit" />
        {' '}
      </div>
    );
  } else if (!jobs.length) {
    tabChild = <h2>No results found</h2>;
  } else {
    tabChild = (
      <>
        {jobs.map((job) => (
          <JobCard job={job} key={job.title}>

            <div className="budget-proposal-section">
              <div className="proposals">
                proposals:
                <span>
                  {' '}
                  {job.proposals.length}
                </span>
              </div>
              <div className="budget">
                budget:
                <span>
                  $
                  {budget}
                </span>
              </div>
              {user?.role !== 'client' && (
                <Button
                  style={{
                    fontSize: '12px',
                    borderRadius: '20px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                  }}
                  onClick={() => navigate(`/job/${job.id}`)}
                  variant="contained"
                >
                  Apply Now
                </Button>
              )}

            </div>

          </JobCard>
        ))}
      </>
    );
  }

  // tablist props
  const tablist: Array<TabListInt> = [{
    label: 'Most Popular',
    child: tabChild,
  },
  { label: 'Best Match', child: <h1>hhhhhhhh</h1> }];
  return (
    <div className="container">
      <div className="searrchInput">
        <TextField
          className="searchInputHomePage"
          type="search"
          placeholder="search for a job"
          name="titleSearch"
          onChange={valueChange}
          variant="standard"
        />
      </div>
      <Filter
        category={category}
        changeCategory={changeCategory}
        priceChange={priceChange}
        iconChange={iconChange}
        price={budget}
      />
      <Tabs tablist={tablist} />
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(jobsCount / 5)}
          shape="rounded"
          className="pagination"
          onChange={handleChange}
        />
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={error}
          onClose={() => setError(false)}
          autoHideDuration={6000}
        >
          <Alert severity="error">
            Something went Wrong, Try Again later!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default JobsSearch;
