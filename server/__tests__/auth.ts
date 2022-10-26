import request from 'supertest';
import app from '../src/app';

const AuthTests = () => {
  // login Api tests
  test('respond with json containing validation error /email is empty/', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('email is a required field');
  });
  test('respond with json containing validation error /email is not valid /', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: '555ahmed' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('email must be a valid email');
  });
  test('respond with json containing validation error /password is empty/', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: '555ahmed@gmail.com' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('password is a required field');
  });
  test('respond with json containing error /no such email/', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: '555ahmed@gmail.com', password: '123456788' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.msg).toBe('User not found');
  });
  test('respond with json containing error /wrong password/', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'ahmed@gmail.com', password: '123456788' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.msg).toBe('Wrong password');
    expect(response.headers['set-cookie']).toBeUndefined();
  });
  test('respond with json containing error /wrong password/', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'ahmed@gmail.com', password: '12345678' })
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.msg).toBe('logged in successfully');
  });
  test('response header contains set-cookie header', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'ahmed@gmail.com', password: '12345678' })
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.headers['set-cookie']).toBeTruthy();
  });
};

export default AuthTests;
