import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello Naqsh, your husband ji loves you more than anything!");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4100;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
