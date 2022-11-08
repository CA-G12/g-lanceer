import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';
import { NotificationInstance } from '../interfaces';

const Notification = sequelize.define<NotificationInstance>('notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  seen: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  freelancerId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

});

export default Notification;
