// Arquivo index e conhecido como entry point

const express = require('express');
const app = express();
const path =  require('path');
const router = express.Router();

// Rota para pagina o Entry point index
router.get('/', function(req, res){

    res.sendFile(path.join(__dirname + '/index.html'));

})

// Rota para pagina sobre
router.get('/sobre', function(req, res){

    res.sendFile(path.join(__dirname + '/sobre.html'));

})

app.use('/', router);
app.listen(process.env.port || 3000); // roteando para porta padrão ou para porta 3000

console.log('Server rodando');