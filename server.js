const express = require('express');
const app = express();
app.use(express.static('public')); 

const https = require('https');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get('https://Quran-bot-24x7-7.eihabgamal.repl.co');//repl 
}, 1);

var shell = require('shelljs');
  
shell.exec(' java -Dnogui=true -jar live.jar &')
