const express = require("express")

const app = express()
const router = express.Router()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

module.exports = app
