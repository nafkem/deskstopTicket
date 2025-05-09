const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  name: DataTypes.STRING,
}, {
  timestamps: true,
});

module.exports = Category;
