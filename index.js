const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const ipRoute = require("./routes/ipRoute");
const { errorHandler } = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/ip", ipRoute);
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on ${PORT}`);
});
