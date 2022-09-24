const resolve = require("path").resolve;

require("dotenv").config({ path: resolve(__dirname, ".env") });

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(resolve(__dirname, "db.json"));

const middlewares = jsonServer.defaults({
  static: resolve(__dirname, "public"),
});

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
