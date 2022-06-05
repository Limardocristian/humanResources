const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class branch extends Model {}
branch.init({
    id_company : DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "branch"
});


module.exports = branch;

