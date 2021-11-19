"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {}

  Comments.init(
    {
      //start table field lists
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      barf: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      meh: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      fire: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      postId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      //end table field lists
    },

    {
      sequelize,
      modelName: "comments",
    }
  );

  Comments.associate = (models) => {
    //    Post.hasMany(Comment);
    // Comment.belongsTo(Post, {
    //   as: "comments",
    //   foreignKey: "postID",
    //   //type: DataTypes.UUID
    //   sourceKey: "id",
    // });
    // associations can be defined here
  };

  return Comments;
};
