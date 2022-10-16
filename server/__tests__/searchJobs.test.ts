import request from 'supertest';
import app from '../src/app';
import insertDB from '../src/db/config/build';
import sequelize from '../src/db/config/connection';

beforeAll(async () => insertDB());
afterAll(async () => sequelize.close());

describe('Jobs API', () => {
  test('Jobs - GET - /api/v1/searchJobs ', async () => {
    const response = await request(app)
      .get('/api/v1/jobs-search?title=full')
      .expect(200);
    expect(response.body.length).toBe(1);
  });
  test('Jobs - GET - /api/v1/search ', async () => {
    const responseNoFound = await request(app)
      .get('/api/v1/jobs-search?title=fulllld')
      .expect(200);
    expect(responseNoFound.body.message).toBe('No jobs found');
  });
});
