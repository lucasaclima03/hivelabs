import express from "express";

const morgan = require("morgan");

const app = express();

// ------- DATABASE -------
const db = require("./models/index");

db.sequelize.sync({});

// - WARNING!!!!! Lines above drop the database and start over
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.")
// })

// ------- IMPORTING ROUTES -------
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  routes() {
    this.app.use("/users", userRoutes);
  }
}

// ------- REGISTERING ROUTES -------
app.use("/users", routeUsers);

app.use((req, res, next) => {
  return res.status(200).send({
    mensagem: "Rota não encontrada",
  });
});

export default new App().app;
