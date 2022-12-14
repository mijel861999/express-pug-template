const app = require("./app/router/app");

const port = app.get("port");

console.log(port);

app.listen(port, () => {
  `Tu servidor se está ejecutando en el puerto ${port}`;
});
