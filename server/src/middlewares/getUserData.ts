import { RequestHandler } from 'express';
import passport from 'passport';
import { serverErrs } from '../helpers';
import { passportAuth } from './auth';

passportAuth(passport);
const getUserData: RequestHandler = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, jwt_payload) => {
    if (jwt_payload) {
      res.status(200).send(jwt_payload);
    }
    next(serverErrs.UNAUTHORIZED('unauthorized'));
  })(req, res);
};

export default getUserData;
