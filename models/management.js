const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class management extends Model {}
management.init({
    id_branch: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "management"
});


module.exports = management;

