import { Strategy as JwtStrategy, StrategyOptions } from 'passport-jwt';
import passport from 'passport';
import { Request } from 'express';
import dotenv from 'dotenv';
import { serverErrs } from '../helpers';

const mid = (req:any, res: any, next: any) => {
  passport.authenticate('jwt', { session: false }, (error, jwt_payload) => {
    if (jwt_payload) {
      req.user = jwt_payload;
      return next();
    }
    next(serverErrs.UNAUTHORIZED('unauthorized'));
  })(req, res);
};

const checkUserAuth = (role: string) => (req: any, res: any, next: any) => {
  const isUSerAuth = role === req.user.role;
  if (isUSerAuth) {
    next();
  } else {
    next(serverErrs.UNAUTHORIZED('unauthorized'));
  }
};

const passportAuth = (passportParameter: any) => {
  dotenv.config();

  const cookieExtractor = (req: Request) => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies.token;
    }
    return token;
  };

  const options : StrategyOptions = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: cookieExtractor,
  };

  passportParameter.use(
    'jwt',
    new JwtStrategy(options, (payload: any, done:any) => {
      done(null, payload);
    }),
  );
};
export { checkUserAuth, mid, passportAuth };
