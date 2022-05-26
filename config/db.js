const { Sequelize } = require('sequelize');
global.config = require('./config');

const sequelize = new Sequelize(
    global.config.db.database,
    global.config.db.user,
    global.config.db.password, 
    {
        host: global.config.db.host,
        dialect: "mysql"
    }
);

module.exports = sequelize;