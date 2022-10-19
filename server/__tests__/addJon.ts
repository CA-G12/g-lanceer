import request from 'supertest';
import app from '../src/app';

const addJobTest = () => {
  test('send empty object', async () => {
    const response = await request(app)
      .post('/api/v1/addjobs')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('description is a required field');
  });
  test('send request with only the description', async () => {
    const response = await request(app)
      .post('/api/v1/addjobs')
      .send({ description: 'lorem' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('category is a required field');
  });
  test('send request with only the description and category', async () => {
    const response = await request(app)
      .post('/api/v1/addjobs')
      .send({ description: 'lorem', category: 'Programming & Tech' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('time is a required field');
  });
  test('send request with only the description and category', async () => {
    const response = await request(app)
      .post('/api/v1/addjobs')
      .send({ description: 'lorem', category: 'Programming & Tech', time: '1 month' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('budget is a required field');
  });
  test('send request with only the description and category', async () => {
    const response = await request(app)
      .post('/api/v1/addjobs')
      .send({
        description: 'lorem', category: 'Programming & Tech', time: '1 month', budget: 300,
      })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('title is a required field');
  });
  test('send request with only the description and category', async () => {
    const response = await request(app)
      .post('/api/v1/addjobs')
      .send({
        description: 'lorem', category: 'Programming & Tech', time: '1 month', budget: 300, title: 'job1',
      })
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body.data.title).toBe('job1');
    expect(response.body.data.description).toBe('lorem');
    expect(response.body.data.category).toBe('Programming & Tech');
    expect(response.body.data.budget).toBe(300);
    expect(response.body.data.time).toBe('1 month');
  });
};

export default addJobTest;
