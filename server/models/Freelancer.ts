import sequelize from '../db/config/connection'
// import Proposal from './Proposal'
// import User from './User'
import { DataTypes } from 'sequelize';
const Freelancer = sequelize.define('freelancers', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brief: {
        type: DataTypes.TEXT,
    },
    portfolio: {
        type: DataTypes.TEXT,
    }
})

// Freelancer.hasMany(Proposal)
// Freelancer.belongsTo(User)

export default Freelancer;
