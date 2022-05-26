const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Access_token extends Model {}
Access_token.init({
    access_token: DataTypes.STRING,
    user_id: DataTypes.INTEGER
}, {
    sequelize,
    modelName: "access_token"
});

module.exports = Access_token;