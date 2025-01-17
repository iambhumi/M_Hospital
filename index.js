const express = require("express");
const path = require("path");
const { connectDB } = require("./connection");
const { report } = require("./routes/reportRoute");
const reportRouter = require("./routes/reportRoute");

const app = express();
const port = 3000;

// connect to database
connectDB("mongodb://localhost:27017/M_Hospital")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/reports", reportRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
