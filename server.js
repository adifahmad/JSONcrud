const fs = require("fs");
const data = fs.readFileSync("db/data.json", "utf-8");
const quest = JSON.parse(data);
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.set('view engine','ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req,res) =>{
    res.render('list',{quest})
})

app.get('/add', (req,res) =>{
    res.render('add',{quest})
})

app.post('/add',(req,res)=>{
    quest.push({name : req.body.name, Height : req.body.Height, weight : req.body.weight, birthdate : req.body.birthdate, married : JSON.parse(req.body.married)});
    res.redirect('/')
})

app.get('/delete/:index', (req, res) =>{
    const index = req.params.index
    quest.splice(index, 1)
    res.redirect('/')
})

app.get('/update/:index', (req, res) =>{
    const index = req.params.index
    const tier = quest[index]
    res.render('update',{tier})
})

app.post('/update/:index', (req, res) =>{
    const index = req.params.index
    quest[index] = {name : req.body.name, Height : req.body.Height, weight : req.body.weight, birthdate : req.body.birthdate, married : JSON.parse(req.body.married)};
    res.redirect('/')
})

app.listen(port, ()=>{
    console.log(`JSONcrud app listening on port ${port}`)
})