'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    content: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    // associations can be defined here
    tag.belongsToMany(models.image_post, { foreignKey: 'tag_id', through: 'tagsImage_post' })
  };
  return tag;
};