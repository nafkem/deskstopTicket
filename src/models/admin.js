const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Ticket = sequelize.define('Ticket', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  status: { type: DataTypes.ENUM('Open', 'In Progress', 'Resolved', 'Closed'), defaultValue: 'Open' },
  priority: { type: DataTypes.ENUM('High', 'Medium', 'Low'), defaultValue: 'Medium' },
  category: DataTypes.STRING,
  tags: DataTypes.STRING,
}, {
  timestamps: true,
});

Ticket.belongsTo(User, { as: 'reporter' });
Ticket.belongsTo(User, { as: 'assigned_to' });

module.exports = Ticket;
