'use strict';
const isValid = require('../../helpers/validateCpfHelper.js');

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
      User.hasMany(models.Enrollment, {
        foreignKey: 'student_id',
        as: 'allEnrollments'
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'The "name" field must have at least 3 or a maximum of 30 characters.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isValidCpf: (cpf) => {
          if (!isValid(cpf)) throw new Error('invalid CPF');
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    paranoid: true,
    defaultScope: {
      where: {
        active: true
      }
    },
    scopes: {
      allRegisters: {
        where: {}
      }
    }
  });
  return User;
};