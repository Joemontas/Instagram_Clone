'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    content: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    // associations can be defined here
    tag.belongsTo(models.image_post, { foreignKey: 'image_post_id' })
  };
  return tag;
};