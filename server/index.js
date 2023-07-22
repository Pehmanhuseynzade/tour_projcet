const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const use_router = require("./routes/usefulinfo.routes")
const countries_router = require("./routes/countries.routes")
const poptour_router = require("./routes/poptour.routes")
const traveltour_router = require("./routes/tour.routes")
const sendemail_router = require("./routes/sendemail.routes")
const form_router = require("./routes/form.routes")
const payment_router = require("./routes/payment.routes")

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(`/api/useful`, use_router)
app.use(`/api/countries`, countries_router)
app.use(`/api/poptour`, poptour_router)
app.use(`/api/traveltour`, traveltour_router)
app.use(`/api/sendemail`, sendemail_router)
app.use(`/api/contactus`, form_router)
app.use(`/api/payment`, payment_router)



PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("MongoDB connected!");
});
