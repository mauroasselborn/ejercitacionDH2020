const express = require("express")
const path = require("path")
const  = require('')

const app = express()
const router = express.Router()
const index = require("./controllers/indexController")

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("port", process.env.PORT || 3000)


app.listen(app.get("port"))
module.exports = app
