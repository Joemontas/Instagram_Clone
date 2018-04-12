'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    content: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.image_post, { foreignKey: 'image_post_id' });
    comment.belongsTo(models.user, { foreignKey: 'user_id' });
  };
  return comment;
};