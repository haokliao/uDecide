"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init(
    {
      firstName: {
        type: DataTypes.STRING,
        //allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      userName: {
        type: DataTypes.STRING,
        //allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        //allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  Users.associate = (models) => {
    models.Users.hasMany(models.Post, {
      foreignKey: {
        name: "UserId",
        allowNull: false,
      },
    });
    models.Post.belongsTo(models.Users);
    // associations can be defined here
  };

  return Users;
};
