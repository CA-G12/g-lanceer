import {
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import './jobCard.css';

function JobCard() {
  return (
    <div className="content">
      <div className="job-card">
        <Link to="/job/jobid">
          <h2 className="h2">
            Graphic Design
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            nisi molestiae praesentium eum repellat expedita sit reicien quas
            perferendis beatae nam ipsum in neque cumque corporis id commod
          </p>
        </Link>
        <div className="second-section">
          <div className="budget-proposal-section">
            <div className="proposals">
              proposals:
              <span>3</span>
            </div>
            <div className="budget">
              budget:
              <span>$50</span>
            </div>
          </div>
          <Link to="/job/jobid">
            <Button
              className="apply-job-btn"
              style={{
                backgroundColor: '#1C3879',
                color: '#fff',
                fontSize: '12px',
                borderRadius: '20px',
                width: '100%',
                paddingLeft: '15px',
                paddingRight: '15px',
              }}
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </div>

  // newwwwwwwwww
  // <div className="table">
  //   <Box sx={{ width: '100%', typography: 'body1' }}>
  //     <TabContext value={value}>
  //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //      <TabList onChange={handleChange} aria-label="lab API tabs example">
  //           <Tab label="Most Popular" value="1" />
  //           <Tab label="Best Match" value="2" />
  //         </TabList>
  //       </Box>
  //       <TabPanel value="1">
  //         <div className="content">
  //           <div className="job-card">
  //             <h2 className="h2">
  //               Graphic Design
  //             </h2>
  //             <p className="description">
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit. I
  //               nisi molestiae praesentium eum repellat expedita sit reicid
  //               perferendis beatae nam ipsum in neque cumque corporis id i.
  //             </p>
  //             <div className="second-section">
  //               <div className="budget-proposal-section">
  //                 <div className="proposals">
  //                   proposals:
  //                   <span>3</span>
  //                 </div>
  //                 <div className="budget">
  //                   budget:
  //                   <span>$50</span>
  //                 </div>
  //               </div>
  //               <Button
  //                 className="apply-job-btn"
  //                 style={{
  //                   backgroundColor: '#1C3879',
  //                   color: '#fff',
  //                   fontSize: '12px',
  //                   borderRadius: '20px',
  //                   width: '10%',
  //                 }}
  //               >
  //                 Apply Now
  //               </Button>
  //             </div>
  //           </div>
  //         </div>

  //       </TabPanel>
  //       <TabPanel value="2">
  //         <div className="content">
  //           <div className="job-card">
  //             <h2 className="h2">
  //               Graphic Design
  //             </h2>
  //             <p className="description">
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Imd
  //               nisi molestiae praesentium eum repellat expedita sit reiciend
  //               perferendis beatae nam ipsum in neque cumque corporis id coi.
  //             </p>
  //             <div className="second-section">
  //               <div className="budget-proposal-section">
  //                 <div className="proposals">
  //                   proposals:
  //                   <span>3</span>
  //                 </div>
  //                 <div className="budget">
  //                   budget:
  //                   <span>$50</span>
  //                 </div>
  //               </div>
  //               <Button
  //                 className="apply-job-btn"
  //                 style={{
  //                   backgroundColor: '#1C3879',
  //                   color: '#fff',
  //                   fontSize: '12px',
  //                   borderRadius: '20px',
  //                   width: '10%',
  //                 }}
  //               >
  //                 Apply Now
  //               </Button>
  //             </div>
  //           </div>
  //         </div>

  //       </TabPanel>

  //     </TabContext>
  //   </Box>

  // </div>
  );
}

export default JobCard;
