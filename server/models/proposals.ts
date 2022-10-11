import sequelize from "../db/config/connection";
import DataTypes from "sequelize";

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
    is_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

}
);

// Proposal.belongsTo(Freelancer)

export default Proposal;
