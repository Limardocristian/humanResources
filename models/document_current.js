const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class document_current extends Model {}
document_current.init({
    id_document_type: DataTypes.INTEGER,
    id_status_type: DataTypes.INTEGER
}, {
    timestamps: false,
    sequelize,
    modelName: "document_current"
});


module.exports = document_current;

