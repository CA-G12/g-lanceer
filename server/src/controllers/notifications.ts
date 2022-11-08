import { Request, Response } from 'express';
import { Notification } from '../models';

const getNotifications = async (req: Request, res: Response) => {
  const { userID } = res.locals.user;
  const data = await Notification.findAndCountAll({
    where: {
      freelancerId: userID,
    },
  });
  return { status: 200, data };
};
export default getNotifications;
