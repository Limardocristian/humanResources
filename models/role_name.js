const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class role_name extends Model {}
role_name.init({
    role_name: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "role_name"
});


module.exports = role_name;

