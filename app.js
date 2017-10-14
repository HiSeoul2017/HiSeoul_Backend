var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var node_xj = require("xls-to-json");
var RandomString = require('randomstring')
var passport = require('passport')
var AppFacebookStrategy = require('passport-facebook-token')
var WebFacebookStrategy = require('passport-facebook').Strategy;//facebook login
var crypto = require('crypto')
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

app.use(passport.initialize());
app.use(passport.session());

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

app.get('/', (req, res)=>{
    res.send('Hello')
})

require('./data/DataSetting')(fs, db, node_xj)
require('./routes/auth')(app, db, RandomString, crypto)
require('./routes/AppFacebook')(app, db, passport, AppFacebookStrategy)
require('./routes/WebFacebook')(app, db, passport, WebFacebookStrategy)


