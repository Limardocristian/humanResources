const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class document_pack extends Model {}
document_pack.init({
    id_pdf_analisis: DataTypes.INTEGER,
    id_document: DataTypes.INTEGER,
    sign: DataTypes.INTEGER,
}, {
    timestamps: false,
    sequelize,
    modelName: "document_pack"
});


module.exports = document_pack;

