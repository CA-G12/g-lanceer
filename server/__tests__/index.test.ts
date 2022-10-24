import insertDB from '../src/db/config/build';
import sequelize from '../src/db/config/connection';
import freelancerTests from './freelancer';
import jobsTest from './jobs';
import proposalsTests from './proposals';

beforeAll(() => insertDB());
afterAll(() => sequelize.close());

describe('Jobs API', jobsTest);
describe('freelancer API /api/v1/freelancer', freelancerTests);
describe('proposals  API /api/v1/proposals', proposalsTests);
