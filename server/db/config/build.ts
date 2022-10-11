import sequelize from "./connection";


const dbConnect = () => sequelize.sync();

export { dbConnect }
