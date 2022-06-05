const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class tipo_pack extends Model {}
tipo_pack.init({
    name: DataTypes.STRING,
}, {
    timestamps: false,
    sequelize,
    modelName: "tipo_pack"
});


module.exports = tipo_pack;

