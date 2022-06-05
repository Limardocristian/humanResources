const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class document_status extends Model {}
document_status.init({
    status_name: DataTypes.STRING,
}, {
    timestamps: false,
    sequelize,
    modelName: "document_status"
});


module.exports = document_status;

