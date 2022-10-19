import request from 'supertest';
import app from '../src/app';

const jobsTest = () => {
  test('Jobs - GET - /api/v1/jobs ', async () => {
    const response = await request(app)
      .get('/api/v1/jobs?title=full')
      .expect(200);
    expect(response.body.data.rows.length).toBe(1);
  });
  test('Jobs - GET - /api/v1/jobs ', async () => {
    const responseNoFound = await request(app)
      .get('/api/v1/jobs?title=fulllld')
      .expect(200);
    expect(responseNoFound.body.data.rows.length).toBe(0);
  });
};

const jobTest = () => {
  test('Jobs - GET - /api/v1/jobs/2 ', async () => {
    const response = await request(app)
      .get('/api/v1/jobs/2')
      .expect(200);
    expect(response.body.data.id).toBe(2);
  });
  test('Jobs - GET - /api/v1/jobs/2333 ', async () => {
    const response = await request(app)
      .get('/api/v1/jobs/2333')
      .expect(200);
    expect(response.body.data).toEqual(null);
  });
};
export { jobTest, jobsTest };
