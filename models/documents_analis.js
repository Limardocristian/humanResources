const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class documents_analis extends Model {}
documents_analis.init({
    name : DataTypes.STRING,
    good: DataTypes.INTEGER,
    bad : DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    period : DataTypes.STRING,
    id_tipo_pack: DataTypes.STRING,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "documents_analis"
});


module.exports = documents_analis;

