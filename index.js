const express = require('express');
const bodyParser = require("body-parser");


const app = express();
 app.set('view engine', 'ejs');
 app.set('views','./views');
app.use(bodyParser.json());



app.get('/', function(req, res){
    res.render("home");
})

app.post('/cripitografia',function(req,res){
    debugger;
    console.log(req.body);
    res.json(req.body)
    
})

app.listen(300, ()=>{
    console.log('servidor rodando na porta 300');
})