const env = require("dotenv");
env.config({ path: "./config.env" });
const express = require("express");
const allModels = require("./models");
const mongoDB = require("./config/db");
const cors = require("cors");

//db connection
mongoDB();

//routes variables
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

//express app
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/private", protectedRoutes);

const server = app.listen(PORT, () => {
  console.log("🟢 Server started on port:", PORT);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error`, error);
  server.close(() => process.exit(1));
});
