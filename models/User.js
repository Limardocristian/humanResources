const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {}
User.init({
    email: DataTypes.STRING,
    password: DataTypes.INTEGER
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;