import express from "express"
import { engine } from "express-handlebars"
import bodyParser from "body-parser"
import { Sequelize } from "sequelize"
import sequelize from "./db/db.js"
import Posts from "./post/post.js"
import { createConnection } from "mysql2"
import connection from "./connection/connection.js"
const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('css/', express.static('css/'))

app.get('/', (req, res)=>{
    connection.query("SELECT * FROM posts ORDER BY id DESC", (results, fields)=>{
        res.render('home', { post: fields })
    })
})
app.get('/post/:id', (req, res)=>{
    connection.query(`SELECT * FROM posts WHERE id = ${req.params.id}`, (results, fields)=>{
        console.log(fields)
        res.render('post', { post: fields })
    })
})

app.get('/add', (req, res)=>{
    for(let i=0; i<3; i++){
        Posts.create({
            nome: `Zezao${i}`,
            post: `Hello world${i}`,
            data: Date(),
            titulo: `Hello world${i}`
        })
    }
})

app.listen(3000, (err)=>{
    if(!err){
        console.log({message: 'success'})
    }
})