const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class documents extends Model {}
documents.init({
    id_tipo_document : DataTypes.INTEGER,
    id_tipo_status: DataTypes.INTEGER,
    id_create_user : DataTypes.INTEGER,
    id_destiny_user : DataTypes.INTEGER,
    id_company : DataTypes.INTEGER,
    id_management: DataTypes.INTEGER,
    id_branches: DataTypes.INTEGER,
    file_name: DataTypes.STRING,
    text_note: DataTypes.STRING,
    view: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "documents"
});


module.exports = documents;

