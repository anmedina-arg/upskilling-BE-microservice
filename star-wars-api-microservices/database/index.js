const server = require("./src/routes/service");

const PORT = 8004;

server.listen(PORT, () => {
  console.log(`database service listen on port ${PORT}`);
});
