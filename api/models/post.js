"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      optOne: {
        type: DataTypes.STRING,
      },
      optTwo: {
        type: DataTypes.STRING,
      },
      optThree: {
        type: DataTypes.STRING,
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
      ranNum: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "post",
    }
  );

  Post.associate = (models) => {
    models.Post.hasMany(models.Comments, {
      foreignKey: {
        name: "postId",
        allowNull: false,
      },
    });
    models.Comments.belongsTo(models.Post);

    // associations can be defined here
  };

  return Post;
};
