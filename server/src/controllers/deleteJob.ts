import { Request, Response } from 'express';

const deleteJob = async (req:Request, res:Response) => {
  const { id } = req.params;
  res.send(id);
};

export default deleteJob;
