const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./Ticket');

const Attachment = sequelize.define('Attachment', {
  filename: DataTypes.STRING,
  filepath: DataTypes.STRING,
}, {
  timestamps: true,
});

Attachment.belongsTo(Ticket);

module.exports = Attachment;
