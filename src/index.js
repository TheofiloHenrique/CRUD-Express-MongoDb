import express from "express";
import dbConection from "./database/db.js";
import routes from "./routes.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(routes);

dbConection()
  .then(() => app.listen(3000, () => console.log("Servidor rodando!")))
  .catch((error) => console.log("Erro na conexão!, erro: ", error));
