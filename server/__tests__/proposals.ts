import request from 'supertest';
import app from '../src/app';

const proposalsTests = () => {
  test('respond with json containing validation error /description is empty/ with status of 400', async () => {
    const response = await request(app)
      .post('/api/v1/proposals')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('description is a required field');
  });

  test('respond with json containing validation error /description length < 15/ with status of 400', async () => {
    const response = await request(app)
      .post('/api/v1/proposals')
      .send({ description: 'gggggggggg' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('description must be at least 15 characters');
  });

  test('respond with json containing validation error /jopID is empty/ with status of 400', async () => {
    const response = await request(app)
      .post('/api/v1/proposals')
      .send({ description: 'lorem lorem lorem lorem' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('jobId is a required field');
  });
  test('respond with json containing validation error /jopID is string/ with status of 400', async () => {
    const response = await request(app)
      .post('/api/v1/proposals')
      .send({ description: 'lorem lorem lorem lorem', jobId: 'ID' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
    // eslint-disable-next-line no-useless-escape
    expect(response.body.message[0]).toBe('jobId must be a `number` type, but the final value was: `NaN` (cast from the value `\"ID\"`).');
  });

  test('respond with json containing validation error /attachments is not a url/ with status of 400', async () => {
    const response = await request(app)
      .post('/api/v1/proposals')
      .send({
        description: 'lorem lorem lorem lorem', jobId: 1, id: 10, attachments: 'ht://placeholder.com',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('attachments must be a valid URL');
  });

  test('respond with json containing the created proposal details with status of 201', async () => {
    const response = await request(app)
      .post('/api/v1/proposals')
      .send({
        description: 'lorem lorem lorem lorem', jobId: 1, id: 10, attachments: 'https://placeholder.com/',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body.data.jobId).toBe(1);
    expect(response.body.data.description.length).toBeGreaterThanOrEqual(15);
    expect(response.body.data.isAccepted).toBeFalsy();
    expect(response.body.data.attachments).toBe('https://placeholder.com/');
  });
};
export default proposalsTests;
