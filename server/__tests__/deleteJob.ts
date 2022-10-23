import request from 'supertest';
import dotenv from 'dotenv';
import app from '../src/app';

const { FREELANCER_TOKEN, CLIENT_TOKEN } = process.env;
dotenv.config();
const deleteJob = () => {
  test('respond with json containing Authentication error /No Token/ with status of 401', async () => {
    const response = await request(app)
      .delete('/api/v1/jobs/1')
      .expect('Content-Type', /json/)
      .expect(401);
    expect(response.body.message).toBe('unauthorized');
  });
  test('**********************', async () => {
    const response = await request(app)
      .delete('/api/v1/jobs/1')
      .set({ Cookie: [`token=${FREELANCER_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(401);
    expect(response.body.message).toBe('unauthorized');
  });
  test('**********************', async () => {
    const response = await request(app)
      .delete('/api/v1/jobs/1')
      .set({ Cookie: [`token=${CLIENT_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(401);
    expect(response.body.message).toBe('unauthorized');
  });
};
export default deleteJob;
