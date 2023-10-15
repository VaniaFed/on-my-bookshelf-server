const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();

const fs = require("fs");
const path = require("path");
const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  cors({
    origin: "https://on-my-bookshelf.vercel.app",
  })
);

server.use(
  jsonServer.rewriter({
    "/*": "/$1",
    "/books/:resource/:id/show": "/:resource/:id",
  })
);

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});

module.exports = server;
