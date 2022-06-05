const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class role_user extends Model {}
role_user.init({
    role_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "role_user"
});


module.exports = role_user;

