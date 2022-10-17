import { Request, Response, ErrorRequestHandler } from 'express';

const clientError = (req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const serverError: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ message: 'Server Error' });
};

export { clientError, serverError };
