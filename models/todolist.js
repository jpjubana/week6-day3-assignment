'use strict';
module.exports = function(sequelize, DataTypes) {
  var todolist = sequelize.define('todolist', {
    title: DataTypes.STRING,
    completed_by: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todolist;
};