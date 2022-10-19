import './style.css';
import { Grid } from '@mui/material';
import avatar from '../../assets/Avatar.png';

interface FreelancerInfo {
  name: string
  image: string | null
  major: string
  portfolio: string
  brief: string
}
interface Props {
  info: FreelancerInfo
}
function FreelancerInfoCard({ info }: Props) {
  return (
    <div className="freelancer-info-card ">
      <Grid
        overflow="hidden"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{ sm: 2, md: 2, lg: 0 }}
      >
        <Grid xs={10} sm={8} md={6} lg={4} item>
          <div className="freelancer-info-card-img">
            <img src={info.image || avatar} alt="" />
          </div>
        </Grid>
        <Grid xs={10} sm={8} md={6} lg={4} item>
          <div className="freelancer-info-card-content">
            <h3 className="freelancer-name">{info.name}</h3>
            <p className="freelancer-major">{info.major}</p>
            <p className="freelancer-brief">{info.brief}</p>
            <p className="freelancer-portfolio"><a href={info.portfolio}>Portfolio</a></p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FreelancerInfoCard;
