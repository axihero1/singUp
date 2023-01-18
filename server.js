const express = require("express");
import { config } from './node_modules/dotenv/lib/main.d';
const app = express();
const cors = require("cors");
const connect = require("./config/db");
const router = require("./router/router");
const env =require("dotenv")



env.config()
const PORT = process.env.PORT
connect();
// PORT
app.use(cors());
app.use(express.json());

app.use("/api", router);
// server Ruunning
app.listen(PORT, () => {
  console.log("server connect PORT 5050 Hi Brooo");
});
