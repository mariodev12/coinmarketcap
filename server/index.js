const express = require('express')
const cors = require('cors')
const app = express()
const request = require('request')

app.use(cors())

app.get('/:coin', function (req, res) {
    request('https://graphs2.coinmarketcap.com/currencies/'+req.params.coin, function(err, response, body){
        res.json(JSON.parse(body));
    })
})

app.get('/ticker/:coin', function (req, res) {
    request('https://api.coinmarketcap.com/v1/ticker/'+req.params.coin, function(err, response, body){
        res.json(JSON.parse(body));
    })
})

app.listen(8000, () => console.log('Example app listening on port 3000!'))