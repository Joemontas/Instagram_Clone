'use strict';
module.exports = (sequelize, DataTypes) => {
  var tagsImage_post = sequelize.define('tagsImage_post', {}, {});
  tagsImage_post.associate = function(models) {
    // associations can be defined here
  };
  return tagsImage_post;
};