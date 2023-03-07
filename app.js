const express = require("express")
const app = express()


app.get("/",function(req,res){
    res.send("Estou na primeira pagina")
})


app.get("/",function(req,res){
    res.sendFile(__dirname + "/html/Trabalho.html")
})

app.get("/contato",function(req,res){
    res.send("Estou na pagina de contato")
})

app.get("/produto/:item",function(req,res){
    res.send(req.params)
})

app.get("/produto/:item/:quantidade",function(req,res){
    res.send("<div style='display:flex; align-items:center;'><h1 style='color:blue; font-size:50px; font-family:papyrus;'>item: </h1><span>"+req.params.item+"</span><br><h1>quantidade: </h1><h2>"+req.params.quantidade+"</h2></div>")
})

app.listen(8081, function(){
    console.log("servidor ativo")
})

//npm install express --save
//npm install nodemon -g
// SEO