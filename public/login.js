var express = require('express')
// const con = require('../banco')
var app = express()

app.use(express.static('public'))
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html")

})

// function verf(){
//     var email = req.query.iemail
//     var senha = req.query.isenha

//     var sql =  "SELECT * FROM cadastro where email = '"+ email + "' and senha = '"+senha+"';"

//     console.log("cu buceta = "+sql)
// }

app.listen(8080)