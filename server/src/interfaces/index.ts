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

export { ControllerFunction, ControllerReturn };
