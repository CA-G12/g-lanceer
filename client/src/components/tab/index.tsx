import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import JobCard from '../jobCard';
import './style.css';

interface Job {
  title: string,
  description: string,
  budget: number
}

const job: Job = {
  title: 'Graphic Design',
  description: 'Lorem lorem lorem lorem lorem lorem lorem lorem',
  budget: 20,
};

function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="table">
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: '#eee' }}>
            <TabList onChange={handleChange}>
              <Tab label="Most Popular" value="1" />
              <Tab label="Best Match" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div>
              <JobCard job={job} />
            </div>
          </TabPanel>
          <TabPanel value="2" />
        </TabContext>
      </Box>
    </div>
  );
}

export default Tabs;
