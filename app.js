var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()
var PORT = process.env.PORT || 3000
var db = require('./database/mongo')

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({
    extended : false
}))

app.listen(PORT, (err)=>{
    if(err){
        console.log("Server Error!")
        throw err
    }
    else {
        console.log("Server Running At "+PORT+" Port!")
    }
})

require('./data/DataSetting')(fs, db)

