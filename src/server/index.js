const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const cors = require('cors');
app.use(cors())

var aylien = require('aylien_textapi')
app.use(express.static('dist'))

console.log(__dirname)

var textapi = new aylien({
    application_id: process.env.api_id,
    application_key: process.env.api_key
});

app.get('/', function (req, res) {
    res.sendFile('index.html')
});

app.post('/text',function(req,res){
    const data = req.body;
    textapi.sentiment( {text :data.text} ,(error,response,remaining) => {
        res.send(response)
    });
});

app.post('/url',function(req,res){
    const data = req.body;
    console.log(data)
    textapi.sentiment({url:data.text},(error,response,remaining)=>{
        console.log(response)
        res.send(response)
    });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

module.exports = app