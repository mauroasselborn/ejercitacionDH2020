const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("port", process.env.PORT || 3000)

//app.use()

module.exports = app
