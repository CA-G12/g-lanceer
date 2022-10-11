import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/config/connection";

const User = sequelize.define("users",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    email:{
        type: DataTypes.STRING,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("freelancer","client"),
        allowNull: false
    }
})

export default User;
