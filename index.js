import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
