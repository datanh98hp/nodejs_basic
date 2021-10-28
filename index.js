const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath))
app.set('view engine','ejs') // set engine 

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
//
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
// 
app.get("/profile", (req, res) => {
  const user = {
    name :'Dat Anh',
    email:'dat198hp@gmail.com',
    city:'Hai Phong',
    skills:['php','js','HTML']
  }
  res.render('profile',{user});
});

// 
app.get('/login',(req,res)=>{
  res.render('login')
})
// Error page 
app.get("*", (req, res) => {
    res.sendFile(`${publicPath}/nopage.html`);
  });



app.listen(3000);
