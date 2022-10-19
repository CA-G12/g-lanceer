import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TextField } from '@mui/material';
import './style.css';

interface TabListInt {
  label: string;
  child: JSX.Element[];
}
interface Props {
  tablist: Array<TabListInt>,
  valueChange: (data: any) => void,
}

function Tabs({ tablist, valueChange }: Props) {
  const [value, setValue] = React.useState(tablist[0].label);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
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
      <div className="table">
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: '#eee' }}>
              <TabList onChange={handleChange}>
                {tablist.map(({ label }) => (
                  <Tab label={label} value={label} key={label} />
                ))}
              </TabList>
            </Box>
            {tablist.map(({ label, child }) => (
              <TabPanel value={label} key={label}>
                {child}
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default Tabs;
