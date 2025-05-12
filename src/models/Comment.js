const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./Ticket');
const User = require('./User');

const Comment = sequelize.define('Comment', {
  text: DataTypes.TEXT,
}, {
  timestamps: true,
});

Comment.belongsTo(Ticket);
Comment.belongsTo(User, { as: 'author' });

module.exports = Comment;
