import express from "express";
import bodyParser from "body-parser";
import config from "./config.js";
import cors from "cors";

config();

import flowerRoute from "./routes/flowerRoute.js";

const app = express();
const jsonparser = bodyParser.json();
app.use(jsonparser);
app.use(cors());

const PORT = 5000;
app.use("/flower", flowerRoute);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
