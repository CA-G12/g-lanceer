import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import router from './routes'

const app = express();
app.set('port', process.env.PORT || 3500);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use('/api/v1', router)


export default app;
