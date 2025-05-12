const { DataTypes } = require('sequelize');
const sequelize = require('../config/syncDb');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('User', 'Agent', 'Admin'), defaultValue: 'User' },
}, {
  timestamps: true,
});

module.exports = User;
