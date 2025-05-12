const app = require('./app');
const syncDb = require('./src/utils/syncDb');
const PORT = process.env.PORT || 5342;

syncDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});