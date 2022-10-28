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
    expect(response.body.message).toBe('Wrong Email Or Password');
  });
  test('respond with json containing error /wrong password/', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'ahmed@gmail.com', password: '123456788' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message).toBe('Wrong Email Or Password');
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
  test('sign up without password and email', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('password is a required field');
  });
  test('sign up without email', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({ password: '1234585hcf' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('email is a required field');
  });
  test('sign up without name', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({ password: '1234585hcf', email: 'shahhd@gmail.com' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('name is a required field');
  });
  test('sign up with invalid email', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({ email: '555ahmed', password: '123456788' })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('email must be a valid email');
  });
  test('sign up successfully ', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'jnekjfhejfk@gmail.com', password: '1234jfbef', name: 'shthaaaadsdswd', role: 'client',
      })
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.data).toBe('signed up successfully ');
  });
  test('sign up without role ', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'lolo200@gmail.com', password: '1234jfbef', name: 'shthaaaadsdswd',
      })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('role is a required field');
  });
  test('response header contains set-cookie header', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'sham@gmail.com', password: '12345678', name: 'shammmghkdhgdd', role: 'client',
      })
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.headers['set-cookie']).toBeTruthy();
  });
  test('sign up with used email', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'sham@gmail.com', password: '123456788', name: 'shammmiddbhdu', role: 'client',
      })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message).toBe('email is already used');
    expect(response.headers['set-cookie']).toBeUndefined();
  });
};

export default AuthTests;
