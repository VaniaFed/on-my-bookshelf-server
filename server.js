// JSON Server module
const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("tmp/db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);

server.use(
  cors({
    origin: "https://on-my-bookshelf.vercel.app",
  })
);
// Listen to port
server.listen(3001, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
