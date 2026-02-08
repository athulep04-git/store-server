const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();


server.use(middleware);
server.use(router);

const PORT=3000||process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
