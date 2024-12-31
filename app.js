const express = require("express");
const app = express();

const toursRoute = require("./routes/toursRout")
const usersRoute = require("./routes/usersRout")



//////////////////////////////// middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use("/api/v1/tours", toursRoute)
app.use("/api/v1/users", usersRoute)

module.exports = app
