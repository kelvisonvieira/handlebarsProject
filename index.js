const express = require("express");
const exphbs = require("express3-handlebars");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine','handlebars');
const user ={
    name:"kelvison",
    surname:"carlos",
}

app.get('/',(req,res)=>{
    res.render('home',{user:user})
})


app.listen(3000,()=>{
    console.log("app funcionando")
})


