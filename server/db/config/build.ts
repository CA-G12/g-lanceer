import sequelize from './connection';
import {
  users, proposals, jobs, freelancers,
} from './fakeData';
import {
  User, Proposal, Job, Freelancer,
} from '../../models/index';

// const dbConnect = () => sequelize.sync();

const insertDB = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(users);
  await Job.bulkCreate(jobs);
  await Freelancer.bulkCreate(freelancers);
  await Proposal.bulkCreate(proposals);
};
insertDB();
// export default dbConnect;
