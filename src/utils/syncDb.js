const sequelize = require('../config/syncDb');
//const models = require('../models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // use { force: true } for dev reset
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Database sync error:', error);
  }
};
