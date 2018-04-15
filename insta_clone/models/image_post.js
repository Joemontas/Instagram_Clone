'use strict';
module.exports = (sequelize, DataTypes) => {
  var image_post = sequelize.define('image_post', {
    source: DataTypes.STRING
  }, {});
  image_post.associate = function(models) {
    // associations can be defined here
    image_post.belongsTo(models.user, { foreignKey: 'user_id' });
    image_post.hasMany(models.comment, { foreignKey: 'image_post_id', onDelete: 'CASCADE' });
    image_post.hasMany(models.tag, { foreignKey: 'image_post_id', onDelete: 'CASCADE' });
  };
  return image_post;
};