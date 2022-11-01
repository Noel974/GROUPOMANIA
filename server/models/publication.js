'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    static associate(models) {
      // define association here
      models.Publication.belongsTo(models.User, {
        allowNull: false,
        foreignKey: "idUSERS",
        onDelete: 'cascade',
        hooks: true,
      });
    }
    
  };
  Publication.init({
    users_idusers: DataTypes.INTEGER,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publication',
  });
  return Publication;
};