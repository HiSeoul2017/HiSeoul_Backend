var mongoose = require('mongoose')
var schema = mongoose.Schema;

var DB_NAME = "SeoulApp"

var db = mongoose.connect("mongodb://localhost/"+DB_NAME, {
    useMongoClient : true
},(err)=>{
    if(err){
        console.log('DB Error!')
        throw err
    }
    else{
        console.log('DB Connect Success!')
    }
})

var DataSchema = new schema({
    "H_KOR_GU": {type : String},
    "ADD_KOR_ROAD": {type : String},
    "CATE4_NAME": {type : String},
    "H_KOR_CITY": {type : String},
    "NM_DP": {type : String},
    "CATE3_NAME": {type : String},
    "ADD_KOR": {type : String},
    "NAME_KOR": {type : String},
    "CATE2_NAME": {type : String},
    "MAIN_KEY": {type : String},
    "H_KOR_DONG": {type : String},
    "CATE1_NAME": {type : String}
})

var Data = mongoose.model('data', DataSchema)

exports.db = db
exports.Data = Data



