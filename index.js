require('dotenv').config();
//this reads from a .env file located at the root folder
//and merge the key/value
const server = require("./api/server.js");
// Make the port be assigned bu the server
//Heroku will place the port environment on their server.
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
