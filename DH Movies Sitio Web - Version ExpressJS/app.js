const express = require("express")
const path = require("path")

const routerIndex = require("./routes/routerIndex")
const routerEnCartelera = require("./routes/routerEnCartelera")
const routerMasVotadas = require("./routes/routerMasVotadas")
const routerSucursales = require("./routes/routerSucursales")
const routerContacto = require("./routes/routerContacto")
const routerFaqs = require("./routes/routerFaqs")

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("port", process.env.PORT || 3000)

app.use("/contacto", routerContacto)
app.use("/", routerIndex)

app.listen(app.get("port"))
