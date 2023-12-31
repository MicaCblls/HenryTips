const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { saveDataInDB } = require("./src/saveData.js");
require("dotenv").config();

const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  saveDataInDB();
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
