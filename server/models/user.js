'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models){
      models.User.hasMany(models.Publication,{

      })
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    surname: DataTypes.STRING,
    name: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};