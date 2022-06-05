const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class audit extends Model {}
audit.init({
    id_user: DataTypes.INTEGER,
    id_destination: DataTypes.INTEGER,
    type: DataTypes.STRING,
    ip: DataTypes.STRING,
    action: DataTypes.STRING,
    date: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "audit"
});


module.exports = audit;

