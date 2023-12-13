import { Sequelize } from "sequelize";

const db = new Sequelize('success-center', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;