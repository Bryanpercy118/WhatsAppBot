const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req,res)=>{
    const twiml = new MessagingResponse();
    twiml.message('Bienvenido a Cosmos');//colocan la api chat bot
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})

app.listen(4000 , () =>{
    console.log('Escuchando en el puerto 4000');
})