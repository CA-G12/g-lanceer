import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';

const Freelancer = sequelize.define('freelancer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  major: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brief: {
    type: DataTypes.TEXT,
  },
  portfolio: {
    type: DataTypes.TEXT,
  },
});

export default Freelancer;
