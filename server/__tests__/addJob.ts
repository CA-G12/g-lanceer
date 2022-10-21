import request from 'supertest';
import dotenv from 'dotenv';
import app from '../src/app';

const { FREELANCER_TOKEN, CLIENT_TOKEN } = process.env;
dotenv.config();
const addJobTest = () => {
  test('no token', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({})
      .expect('Content-Type', /json/)
      .expect(401);
    expect(response.body.message).toBe('unauthorized');
  });
  test('freelancer token', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({})
      .set({ Cookie: [`token=${FREELANCER_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(401);
    expect(response.body.message).toBe('unauthorized');
  });
  test('send empty object with token', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({})
      .set({ Cookie: [`token=${CLIENT_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('description is a required field');
  });
  test('send request with only the description with token', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({ description: 'lorem' })
      .set({ Cookie: [`token=${CLIENT_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('category is a required field');
  });
  test('send request with only the description and category with token', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({ description: 'lorem', category: 'Programming & Tech' })
      .set({ Cookie: [`token=${CLIENT_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('time is a required field');
  });
  test('send request with only the description and category', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({ description: 'lorem', category: 'Programming & Tech', time: '1 month' })
      .set({ Cookie: [`token=${CLIENT_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('budget is a required field');
  });
  test('send request with only the description and category', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({
        description: 'lorem', category: 'Programming & Tech', time: '1 month', budget: 300,
      })
      .set({ Cookie: [`token=${CLIENT_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('title is a required field');
  });
  test('send request with only the description and category', async () => {
    const response = await request(app)
      .post('/api/v1/jobs')
      .send({
        description: 'lorem', category: 'Programming & Tech', time: '1 month', budget: 300, title: 'job1',
      })
      .set({ Cookie: [`token=${CLIENT_TOKEN}`] })
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body.data.title).toBe('job1');
    expect(response.body.data.description).toBe('lorem');
    expect(response.body.data.category).toBe('Programming & Tech');
    expect(response.body.data.budget).toBe(300);
    expect(response.body.data.time).toBe('1 month');
    expect(response.body.data.userId).toBe(2);
  });
};

export default addJobTest;
