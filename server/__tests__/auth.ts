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
  // freelancer signup
  test('freelancer signup', async () => {
    const response = await request(app)
      .post('/api/v1/auth/freelancer')
      .send({
        title: 'nbscdnn',
        major: 'smkmskcm',
        portfolio: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        brief: 'enfjenjenv',
        image: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        userId: 2,
      })
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body.data.image).toBe('https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1');
    expect(response.body.data.title).toBe('nbscdnn');
    expect(response.body.data.major).toBe('smkmskcm');
    expect(response.body.data.brief).toBe('enfjenjenv');
    expect(response.body.data.userId).toBe(2);
    expect(response.body.data.portfolio).toBe('https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1');
  });
  test('freelancer signup without title', async () => {
    const response = await request(app)
      .post('/api/v1/auth/freelancer')
      .send({
        major: 'smkmskcm',
        portfolio: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        brief: 'enfjenjenv',
        image: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        userId: 2,
      })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('Title is required');
  });
  test('freelancer signup without major', async () => {
    const response = await request(app)
      .post('/api/v1/auth/freelancer')
      .send({
        title: 'nbscdnn',
        portfolio: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        brief: 'enfjenjenv',
        image: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        userId: 2,
      })
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body.message[0]).toBe('Major is required');
  });
  test('freelancer signup without portfolio', async () => {
    const response = await request(app)
      .post('/api/v1/auth/freelancer')
      .send({
        title: 'nbscdnn',
        major: 'smkmskcm',
        brief: 'enfjenjenv',
        image: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        userId: 2,
      })
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body.data.image).toBe('https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1');
    expect(response.body.data.title).toBe('nbscdnn');
    expect(response.body.data.major).toBe('smkmskcm');
    expect(response.body.data.brief).toBe('enfjenjenv');
    expect(response.body.data.userId).toBe(2);
    expect(response.body.data.portfolio).toBe(null);
  });
  test('freelancer signup without portfolio and description', async () => {
    const response = await request(app)
      .post('/api/v1/auth/freelancer')
      .send({
        title: 'nbscdnn',
        major: 'smkmskcm',
        image: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        userId: 2,
      })
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body.data.image).toBe('https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1');
    expect(response.body.data.title).toBe('nbscdnn');
    expect(response.body.data.major).toBe('smkmskcm');
    expect(response.body.data.brief).toBe(null);
    expect(response.body.data.userId).toBe(2);
    expect(response.body.data.portfolio).toBe(null);
  });
  test('response header contains set-cookie header', async () => {
    const response = await request(app)
      .post('/api/v1/auth/freelancer')
      .send({
        title: 'nbscdnn',
        major: 'smkmskcm',
        image: 'https://www.figma.com/file/JscUnsrkjrziWvlS5jOGL5/Freelance?node-id=0%3A1',
        userId: 2,
      })
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.headers['set-cookie']).toBeTruthy();
  });
};

export default AuthTests;
