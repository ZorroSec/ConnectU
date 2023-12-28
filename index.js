import express from "express"
import { engine } from "express-handlebars"
import bodyParser from "body-parser"
import { Sequelize } from "sequelize"
import sequelize from "./db/db.js"
import Posts from "./post/post.js"
import Comentarios from "./comantarios/comentarios.js"
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
    var post
    var comentario
    connection.query(`SELECT * FROM posts WHERE id = ${req.params.id}`, (results, fields)=>{
        post = fields
        console.log(post)
        connection.query(`SELECT * FROM comentarios WHERE idpost = ${req.params.id} ORDER BY id DESC`, (results, fields)=>{
            comentario = fields
            console.log(comentario)
            const idForPost = req.params.id
            res.render('post', { post: post, comment: fields, idForPost: idForPost })
        })
    })
    
})
app.get('/post/:id/comentar', (req, res)=>{
    const idForPost = req.params.id
    res.render('comentar', { idForPost: idForPost })
})
app.post('/post/:id/comentar', (req, res)=>{
    const idForPost = req.params.id
    function submitBtn(){
        const nome = req.body.nome
        const idPost = req.params.id
        const comentario = req.body.comentario
        const data = {
            idpost: idPost,
            comentario: comentario,
            nome: nome
        }
        Comentarios.create(data)
        res.redirect(`/post/${idForPost}`)
    }
    res.render('comentar', { idForPost: idForPost, submitBtn: submitBtn() })
})
app.get('/add', (req, res)=>{
    Posts.create({
        nome: `J da Luna`,
        post: `Eu amo a luna maria brito de andrade`,
        data: Date(),
        titulo: `Eu amo ela...`
    })
})

app.get('/add/comentario', (req, res)=>{
    Comentarios.create({
        idpost: '32',
        comentario: "Hiii",
        nome: "Zezao"
    })
})

app.listen(3000, (err)=>{
    if(!err){
        console.log({message: 'success'})
    }
})