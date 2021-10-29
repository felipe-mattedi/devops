import axios from "axios";
import express from "express";
import logger from "./logger.js";

const app = express();
const port = process.env.PORT || 3000;

const router = express.Router();

router.delete("/", async (req, res, next) => {
  res.status(200).send("Método Delete");
  next();
});

router.get("/", async (req, res, next) => {
  res.status(200).send("Método Get");
  next();
});

router.get("/teste", async (req, res, next) => {
    res.status(200).send("Método Get");
    next();
  });

router.post("/", async (req, res, next) => {
  res.status(200).send("Método Post");
  next();
});

app.use("/", router);

const server = app.listen(port, () => {
  logger.info(`LISTENING PORT ${port}`);
});

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);

async function shutDown() {
  logger.info(`TERMINO DO SISTEMA`);
  server.close(() => {
    process.exit(0);
  });
}
