'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.image_post, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    user.hasMany(models.comment, { foreignKey: 'user_id', onDelete: 'CASCADE' });
  };
  return user;
};