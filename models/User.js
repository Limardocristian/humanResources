const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    profile: DataTypes.STRING,
    document_type: DataTypes.STRING,
    document_no: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    area_code: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    branch_id: DataTypes.INTEGER,
    management_id: DataTypes.INTEGER,
    signature_certificate: DataTypes.STRING,
    key_secret: DataTypes.STRING,
    firmaDigital: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    admission_date: DataTypes.TIME,
    discharge_date: DataTypes.TIME,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "user"
});


module.exports = User;

