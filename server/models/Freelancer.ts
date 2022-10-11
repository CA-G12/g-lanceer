import sequelize from '../db/config/connection'
import { User, Proposal } from '.'
import { DataTypes } from 'sequelize';

const Freelancer = sequelize.define('Freelancer', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: DataTypes.TEXT,
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

Freelancer.hasMany(Proposal)
Freelancer.belongsTo(User)

export default Freelancer;
