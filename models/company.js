const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class company extends Model {}
company.init({
    FTID : DataTypes.INTEGER,
    legal_name: DataTypes.STRING,
    fantasy_name : DataTypes.STRING,
    type_company : DataTypes.STRING,
    send_sms : DataTypes.INTEGER,
    sms_url: DataTypes.STRING,
    sms_key: DataTypes.STRING,
    sms_from: DataTypes.STRING,
    sms_text: DataTypes.STRING,
    send_email: DataTypes.INTEGER,
    send_signature_email : DataTypes.INTEGER,
    dissatisfied: DataTypes.INTEGER,
    watch: DataTypes.INTEGER,
    download: DataTypes.INTEGER,
    sign_first: DataTypes.INTEGER,
    created_at: DataTypes.TIME,
    updated_at: DataTypes.TIME,
}, {
    timestamps: false,
    sequelize,
    modelName: "company"
});
company.associate = function(models) {
    company.hasMany(
        models.User,
        {
          as: 'User',
          foreignKey: 'company_id'
        }
      );
}

module.exports = company;

