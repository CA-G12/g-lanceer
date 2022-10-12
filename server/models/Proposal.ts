import DataTypes from 'sequelize';
import sequelize from '../db/config/connection';

const Proposal = sequelize.define('proposal', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  attachments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isAccepted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

});

export default Proposal;
