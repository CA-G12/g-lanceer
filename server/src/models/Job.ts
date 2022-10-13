import { DataTypes } from 'sequelize';
import sequelize from '../db/config/connection';

const Job = sequelize.define('job', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isOccupied: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

});

export default Job;
