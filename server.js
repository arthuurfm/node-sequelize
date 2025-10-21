const app = require('./src/app.js');
const { sequelize } = require('./src/database/models/index.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});