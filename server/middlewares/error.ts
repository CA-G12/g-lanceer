import { Request, Response, NextFunction } from 'express';

const clientError = (req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
};

const serverError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.status) res.status(err.status).json({ message: err.message });
  else res.status(500).json({ message: 'Server Error' });
  next();
};

export { clientError, serverError };
