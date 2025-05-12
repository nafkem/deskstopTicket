const { DataTypes } = require('sequelize');
const sequelize = require('../config/syncDb');
const User = require('./User');

const Agent = sequelize.define('Agent', {
  department: DataTypes.STRING,
}, {
  timestamps: true,
});

Agent.belongsTo(User, { foreignKey: 'id' });

module.exports = Agent;
