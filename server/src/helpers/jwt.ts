import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Payload } from '../interfaces';

dotenv.config();
const { JWT_SECRET } = process.env;

const generateToken = (payload: Payload) => new Promise((resolve, reject) => {
  if (!JWT_SECRET) throw new Error('No Secret Key');
  Jwt.sign(payload, JWT_SECRET, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});

export default generateToken;
