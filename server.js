const app = require('./app');
const syncDb = require('./utils/syncDb');
const PORT = process.env.PORT || 5000;

syncDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
