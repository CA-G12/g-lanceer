import request from 'supertest';
import app from '../src/app';
import insertDB from '../src/db/config/build';
import sequelize from '../src/db/config/connection';

beforeAll(async () => insertDB());
afterAll(async () => sequelize.close());

describe('Job API', () => {
  test('Jobs - GET - /api/v1/jobs/job/2 ', async () => {
    const response = await request(app)
      .get('/api/v1/jobs/job/2')
      .expect(200);
    expect(response.body.data.id).toBe(2);
  });
});
