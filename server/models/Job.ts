import sequelize from "../db/config/connection";
import { DataTypes } from "sequelize";

const Job = sequelize.define("Job",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    title:{
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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_occupied: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

})

export default Job;
