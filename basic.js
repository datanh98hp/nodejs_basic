const fs = require('fs')
const  app = require('./app')
console.log('Dat Anh')
// ghi file 
fs.writeFileSync("hello.txt",'hello DA ' + 'a ='+ app.a + __dirname)

fs.writeFileSync("code.txt",'Some code')

console.log(app.a)

