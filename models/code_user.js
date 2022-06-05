const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class code_user extends Model {}
code_user.init({
    id_user: DataTypes.INTEGER,
    code: DataTypes.STRING,
    oauth: DataTypes.STRING
}, {
    timestamps: false,
    sequelize,
    modelName: "code_user"
});


module.exports = code_user;

