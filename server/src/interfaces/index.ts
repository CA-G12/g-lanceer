import {
  NextFunction,
  Request,
  Response,
} from 'express';

type ControllerReturn = {
  status: number;
  data?: object;
  msg?: string;

};
type ControllerFunction =
  (req: Request, res: Response, next: NextFunction) => Promise<ControllerReturn>;
interface AuthUser {
  userID: number,
  role: string,
  name: string
}
interface AuthRequest extends Request {
  user?: AuthUser
}
export { ControllerFunction, ControllerReturn, AuthRequest };
