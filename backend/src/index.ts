import express from "express";
// import userRouter from "./routes/user.router";
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("../swaggerConfig");

import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import creditRoutes from "./routes/creditRoutes";
import currencyRoutes from "./routes/currencyRoutes";
import reportRoutes from "./routes/reportRoutes";
import accountRoutes from "./routes/accountRoutes";
// import testRouter from "./routes/testRouter";

// import { errorMiddleware } from "./middleware/error.middleware";

// import { initSocket } from "./socket";
// import { ioMiddleware } from "./middleware/io.middleware";

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
// export const io = initSocket(server);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    // origin: "*",
    credentials: true,
  })
);

app.options("*", cors());
app.use(cookieParser());
app.use(express.json());
// app.use(errorMiddleware);
// app.use(ioMiddleware(io));

app.use("/api", creditRoutes);
app.use("/api", currencyRoutes);
app.use("/api", reportRoutes);
app.use("/api", accountRoutes);

app.get("/", (req, res) => {
  const clientIP = req.ip;
  res.send(`Hello World ${clientIP}`);
});

server.listen(port, () => {
  console.log(`server up and running on port: ${port}`);
});
