import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import compression from 'compression';
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan';

import router from './routes';

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 3500);

app.use([
  express.json(),
  cookieParser(),
  compression(),
  express.urlencoded({ extended: false }),
]);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1', router);

export default app;
