'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model { 
    static associate(models) {
      User.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
      User.hasMany(models.Enrollment, {
        foreignKey: 'student_id',
        scope: { status: 'enrolled' },
        as: 'enrolledClasses'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};