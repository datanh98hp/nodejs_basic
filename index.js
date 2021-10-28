const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const reqFilter = require("./middleware/middleware");

const route = express.Router();

const publicPath = path.join(__dirname, "public");



// app.use(express.static(publicPath))
app.set("view engine", "ejs"); // set engine

// middleware
route.use(reqFilter);
// app.use(reqFilter); // set middleware
//
app.use("/", route);

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
//
route.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});


//
app.get("/profile", (req, res) => {
  const user = {
    name: "Dat Anh",
    email: "dat198hp@gmail.com",
    city: "Hai Phong",
    skills: ["php", "js", "HTML",'laravel'],
  };
  res.render("profile", { user });
});


route.get("/contact", (req, res) => {
  res.send("Contact Page...");
});



//
app.get("/login", (req, res) => {
  res.render("login");
});
// Error page
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
});

app.listen(3000);
