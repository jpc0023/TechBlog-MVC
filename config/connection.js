const Sequelize = require('sequlize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JSAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;