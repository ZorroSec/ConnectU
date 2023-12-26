import express from "express"
import { engine } from "express-handlebars"
import bodyParser from "body-parser"
import { Sequelize } from "sequelize"
import sequelize from "./db/db"
import Posts from "./post/post"
import { createConnection } from "mysql2"
import connection from "./connection/connection"
import path from 'path'
const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + 'public')))

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(3000, (err)=>{
    if(!err){
        console.log({message: 'success'})
    }
})