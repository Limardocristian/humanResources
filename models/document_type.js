const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class document_type extends Model {}
document_type.init({
    name: DataTypes.STRING,
    id_status: DataTypes.INTEGER,
    period: DataTypes.INTEGER,
    sign_father_x: DataTypes.INTEGER,
    sign_father_y: DataTypes.INTEGER,
    sign_father_high: DataTypes.INTEGER,
    sign_father_wide: DataTypes.INTEGER,
    sign_son_x: DataTypes.INTEGER,
    sign_son_y: DataTypes.INTEGER,
    sign_son_high: DataTypes.INTEGER,
    sign_son_wide: DataTypes.INTEGER,
    external_cut_x: DataTypes.INTEGER,
    external_cut_y: DataTypes.INTEGER,
    external_cut_high: DataTypes.INTEGER,
    external_cut_wide: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "document_type"
});


module.exports = document_type;

