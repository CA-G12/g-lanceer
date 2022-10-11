import sequelize from "../db/config/connection";
import { DataTypes } from "sequelize";
import { Proposal } from ".";

const Job = sequelize.define("Job", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    budget: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isOccupied: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})

Job.hasMany(Proposal)

export default Job;
