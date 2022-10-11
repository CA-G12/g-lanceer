import sequelize from "../db/config/connection";
import DataTypes from "sequelize";
import { Freelancer, Job } from ".";
const Proposal = sequelize.define('Proposal', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    attachments: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isAccepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

}
);

Proposal.belongsTo(Freelancer)
Proposal.belongsTo(Job)


export default Proposal;
