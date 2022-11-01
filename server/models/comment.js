'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models){
      models.User.belongsToMany(models.Publication, {
        through: models.Comment,
        foreignKey: "idUSERS",
      });
      models.Publication.belongsToMany(models.User, {
        through: models.Comment,
        foreignKey: "idPublication",
      });
      models.Comment.belongsTo(models.User, {
        foreignKey: "idPublication",
        as: "publication",
        onDelete: "cascade",
        hooks: true,
      });
      models.Comment.belongsTo(models.Publication, {
        foreignKey: "idUSERS",
        as: "user",
        onDelete: "cascade",
        hooks: true,
      })
    }
  };
  Comment.init({
    users_idusers: DataTypes.INTEGER,
    publications_idpublications: DataTypes.INTEGER,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};