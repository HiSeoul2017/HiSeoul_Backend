module.exports = DataSetting


function DataSetting(fs, db, node_xj) {
    SeoulData(fs, db)
    SeoulMotel_EN(fs, db)
    SeoulMotel_CN(fs, db)
    SeoulMotel_KO(fs, db)
    SeoulInfo_EN(fs, db)
    SeoulInfo_CN(fs, db)
    SeoulInfo_KO(fs, db)
    SeoulBus_EN(fs, db)
    SeoulBus_CN(fs, db)
    SeoulBukChon_EN(fs, db)
    SeoulBukChon_CN(fs, db)
    SeoulBukChon_KO(fs, db)
    SeoulMedi_EN(fs, db)
    SeoulMedi_CN(fs, db)
    SeoulMinBak_EN(fs, db)
    SeoulMinBak_CN(fs, db)
    SeoulMinBak_KO(fs, db)
    SeoulYuJuk_EN(fs, db)
    SeoulYuJuk_CN(fs, db)
    SeoulYuJuk_KO(fs, db)
    SeoulEmergency(fs, db)
    SeoulRestaurant_EN(fs, db)
    SeoulRestaurant_CN(fs, db)
    SeoulRestaurant_KO(fs, db)
    SeoulHotel_EN(fs, db)
    SeoulHotel_CN(fs, db)
    SeoulHotel_KO(fs, db)
    JungGuStoryTelling_KO(fs, db, node_xj)
    JungGuStoryTelling_EN(fs, db, node_xj)
    JungGuStoryTelling_JP(fs, db, node_xj)
    JungGuStoryTelling_CN(fs, db, node_xj)
    JungGuHistoryCulture_KO(fs, db, node_xj)
    JungGuHistoryCulture_JP(fs, db, node_xj)
    JungGuHistoryCulture_EN(fs, db, node_xj)
    JungGuHistoryCulture_CN(fs, db, node_xj)
}


function SeoulData(fs, db) {
    fs.readFile('data/SeoulData.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.Data.find({}, (err, result)=>{
            if(err){
                console.log("SeoulData Error")
                throw err
            }
            else if(!result[0]){
                console.log('DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.Data({
                        H_KOR_GU: json.DATA[i].H_KOR_GU,
                        ADD_KOR_ROAD: json.DATA[i].ADD_KOR_ROAD,
                        CATE4_NAME: json.DATA[i].CATE4_NAME,
                        H_KOR_CITY: json.DATA[i].H_KOR_CITY,
                        NM_DP: json.DATA[i].NM_DP,
                        CATE3_NAME: json.DATA[i].CATE3_NAME,
                        ADD_KOR: json.DATA[i].ADD_KOR,
                        NAME_KOR: json.DATA[i].NAME_KOR,
                        CATE2_NAME: json.DATA[i].CATE2_NAME,
                        MAIN_KEY: json.DATA[i].MAIN_KEY,
                        H_KOR_DONG: json.DATA[i].H_KOR_DONG,
                        CATE1_NAME: json.DATA[i].CATE1_NAME
                    })
                    savedata.save()
                }
            }
        })
    })

}

function SeoulMotel_EN(fs, db) {
    fs.readFile('data/SeoulMotel_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMotel_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMotel_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('Seoul _otel_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMotel_EN({
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulMotel_CN(fs, db) {
    fs.readFile('data/SeoulMotel_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMotel_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMotel_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('Seoul_Motel_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMotel_CN({
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "NAME_CNG": json.DATA[i].NAME_CNG,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulMotel_KO(fs, db) {
    fs.readFile('data/SeoulMotel_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMotel_KO.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMotel_KO Error")
                throw err
            }
            else if(!result[0]){
                console.log('Seoul_Motel_KO DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMotel_KO({
                        "H_KOR_GU": json.DATA[i].H_KOR_GU,
                        "H_KOR_CITY": json.DATA[i].H_KOR_CITY,
                        "NM_DP": json.DATA[i].NM_DP,
                        "CATE3_NAME": json.DATA[i].CATE3_NAME,
                        "NAME_KOR": json.DATA[i].NAME_KOR,
                        "CATE2_NAME": json.DATA[i].CATE2_NAME,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_KOR_DONG": json.DATA[i].H_KOR_DONG,
                        "CATE1_NAME": json.DATA[i].CATE1_NAME
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulInfo_EN(fs, db) {
    fs.readFile('data/SeoulInfo_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulInfo_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulInfo_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('Seoul_Info_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulInfo_EN({
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "TEL": json.DATA[i].TEL,
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulInfo_CN(fs, db) {
    fs.readFile('data/SeoulInfo_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulInfo_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulInfo_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('Seoul_Info_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulInfo_CN({
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "TEL": json.DATA[i].TEL,
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "NAME_CNG": json.DATA[i].NAME_CNG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulInfo_KO(fs, db) {
    fs.readFile('data/SeoulInfo_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulInfo_KO.find({}, (err, result)=>{
            if(err){
                console.log("SeoulInfo_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('Seoul_Info_KO DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulInfo_KO({
                        "H_KOR_GU": json.DATA[i].H_KOR_GU,
                        "TEL": json.DATA[i].TEL,
                        "H_KOR_CITY": json.DATA[i].H_KOR_CITY,
                        "ADD_KOR": json.DATA[i].ADD_KOR,
                        "NAME_KOR": json.DATA[i].NAME_KOR,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_KOR_DONG": json.DATA[i].H_KOR_DONG
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulBus_EN(fs, db) {
    fs.readFile('data/SeoulBus_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulBus_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulBus_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulBus_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulBus_EN({
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "MNG_NO": json.DATA[i].MNG_NO
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulBus_CN(fs, db) {
    fs.readFile('data/SeoulBus_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulBus_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulBus_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulBus_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulBus_CN({
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "MNG_NO": json.DATA[i].MNG_NO,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG,
                        "NAME_CNG": json.DATA[i].NAME_CNG
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulBukChon_EN(fs, db) {
    fs.readFile('data/SeoulBukChon_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulBukChon_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulBukChon_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulBukChon_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulBukChon_EN({
                        "SERVICE_OK": json.DATA[i].SERVICE_OK,
                        "HOUSE_TYPE": json.DATA[i].HOUSE_TYPE,
                        "PRIORITY": json.DATA[i].PRIORITY,
                        "HOUSE_ID": json.DATA[i].HOUSE_ID,
                        "HOUSE_TELL": json.DATA[i].HOUSE_TELL,
                        "LANGUAGE_TYPE": json.DATA[i].LANGUAGE_TYPE,
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "HOUSE_REG_DATE": json.DATA[i].HOUSE_REG_DATE,
                        "HOUSE_HP": json.DATA[i].HOUSE_HP,
                        "H_ENG_DONG":json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "HOUSE_OPEN_TIME": json.DATA[i].HOUSE_OPEN_TIME,
                        "HOUSE_YEAR": json.DATA[i].HOUSE_YEAR
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulBukChon_CN(fs, db) {
    fs.readFile('data/SeoulBukChon_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulBukChon_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulBukChon_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulBukChon_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulBukChon_CN({
                        "SERVICE_OK": json.DATA[i].SERVICE_OK,
                        "HOUSE_TYPE": json.DATA[i].HOUSE_TYPE,
                        "PRIORITY": json.DATA[i].PRIORITY,
                        "HOUSE_ID": json.DATA[i].HOUSE_ID,
                        "HOUSE_TELL": json.DATA[i].HOUSE_TELL,
                        "LANGUAGE_TYPE": json.DATA[i].LANGUAGE_TYPE,
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "NAME_CNG": json.DATA[i].NAME_CNG,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "HOUSE_REG_DATE": json.DATA[i].HOUSE_REG_DATE,
                        "HOUSE_HP": json.DATA[i].HOUSE_HP,
                        "H_CNG_DONG":json.DATA[i].H_CNG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "HOUSE_OPEN_TIME": json.DATA[i].HOUSE_OPEN_TIME,
                        "HOUSE_YEAR": json.DATA[i].HOUSE_YEAR
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulBukChon_KO(fs, db) {
    fs.readFile('data/SeoulBukChon_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulBukChon_KO.find({}, (err, result)=>{
            if(err){
                console.log("SeoulBukChon_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulBukChon_KO DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulBukChon_KO({
                        "SERVICE_OK": json.DATA[i].SERVICE_OK,
                        "HOUSE_TYPE": json.DATA[i].HOUSE_TYPE,
                        "PRIORITY":json.DATA[i].PRIORITY,
                        "HOUSE_ID": json.DATA[i].HOUSE_ID,
                        "HOUSE_ADDR": json.DATA[i].HOUSE_ADDR,
                        "HOUSE_NAME": json.DATA[i].HOUSE_NAME,
                        "BOOL_CULTURE": json.DATA[i].BOOL_CULTURE,
                        "HOUSE_TELL": json.DATA[i].HOUSE_TELL,
                        "LANGUAGE_TYPE": json.DATA[i].LANGUAGE_TYPE,
                        "TYPE_NAME": json.DATA[i].TYPE_NAME,
                        "HOUSE_OWNER": json.DATA[i].HOUSE_OWNER,
                        "HOUSE_ADMIN": json.DATA[i].HOUSE_ADMIN,
                        "HOUSE_REG_DATE": json.DATA[i].HOUSE_REG_DATE,
                        "HOUSE_HP": json.DATA[i].HOUSE_HP,
                        "HOUSE_OPEN_TIME": json.DATA[i].HOUSE_OPEN_TIME,
                        "HOUSE_YEAR": json.DATA[i].HOUSE_YEAR
                    })
                    savedata.save()
                }
            }
        })
    })
}



function SeoulMedi_EN(fs, db) {
    fs.readFile('data/SeoulMedi_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMedi_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMedi_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulMedi_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMedi_EN({
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "TEL": json.DATA[i].TEL,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulMedi_CN(fs, db) {
    fs.readFile('data/SeoulMedi_CN(약국).json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMedi_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMedi_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulMedi_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMedi_CN({
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "NAME_CNG": json.DATA[i].NAME_CNG,
                        "TEL": json.DATA[i].TEL,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulMinBak_EN(fs, db) {
    fs.readFile('data/SeoulMinBak_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMinBak_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMinBak_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulMinBak_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMinBak_EN({
                        "ROOM": json.DATA[i].ROOM,
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulMinBak_CN(fs, db) {
    fs.readFile('data/SeoulMinBak_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMinBak_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMinBak_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulMinBak_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMinBak_CN({
                        "ROOM": json.DATA[i].ROOM,
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG,
                        "NAME_CNG": json.DATA[i].NAME_CNG
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulMinBak_KO(fs, db) {
    fs.readFile('data/SeoulMinBak_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulMinBak_KO.find({}, (err, result)=>{
            if(err){
                console.log("SeoulMinBak_KO Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulMinBak_KO DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulMinBak_KO({
                        "ROOM": json.DATA[i].ROOM,
                        "H_KOR_GU": json.DATA[i].H_KOR_GU,
                        "ADD_KOR_ROAD": json.DATA[i].ADD_KOR_ROAD,
                        "H_KOR_CITY": json.DATA[i].H_KOR_CITY,
                        "NOTE": json.DATA[i].NOTE,
                        "ADD_KOR": json.DATA[i].ADD_KOR,
                        "NAME_KOR": json.DATA[i].NAME_KOR,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "PART": json.DATA[i].PART,
                        "H_KOR_DONG": json.DATA[i].H_KOR_DONG
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulYuJuk_EN(fs, db) {
    fs.readFile('data/SeoulYuJuk_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulYuJuk_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulYuJuk_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulYuJuk_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulYuJuk_EN({
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulYuJuk_CN(fs, db) {
    fs.readFile('data/SeoulYuJuk_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulYuJuk_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulYuJuk_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulYuJuk_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulYuJuk_CN({
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG,
                        "NAME_CNG": json.DATA[i].NAME_CNG
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulYuJuk_KO(fs, db) {
    fs.readFile('data/SeoulYuJuk_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulYuJuk_KO.find({}, (err, result)=>{
            if(err){
                console.log("SeoulYuJuk_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulYuJuk_KO DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulYuJuk_KO({
                        "H_KOR_GU": json.DATA[i].H_KOR_GU,
                        "ADD_KOR_ROAD": json.DATA[i].ADD_KOR_ROAD,
                        "H_KOR_CITY": json.DATA[i].H_KOR_CITY,
                        "CATE3_NAME": json.DATA[i].CATE3_NAME,
                        "ADD_KOR": json.DATA[i].ADD_KOR,
                        "NAME_KOR": json.DATA[i].NAME_KOR,
                        "CATE2_NAME": json.DATA[i].CATE2_NAME,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_KOR_DONG": json.DATA[i].H_KOR_DONG,
                        "CATE1_NAME": json.DATA[i].CATE1_NAME
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulEmergency(fs, db) {
    fs.readFile('data/SeoulEmergency.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulEmergency.find({}, (err, result)=>{
            if(err){
                console.log("SeoulEmergency Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulEmergency DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulEmergency({
                        "REPRSNT_TLPHON": json.DATA[i].REPRSNT_TLPHON,
                        "AREA": json.DATA[i].AREA,
                        "TM_LO": json.DATA[i].TM_LO,
                        "FXNUM": json.DATA[i].FXNUM,
                        "CHILD_NIGHTCLNIC": json.DATA[i].CHILD_NIGHTCLNIC,
                        "EMRRM_DIRECTTLPHON": json.DATA[i].EMRRM_DIRECTTLPHON,
                        "SN": json.DATA[i].SN,
                        "INSTT_ADRES": json.DATA[i].INSTT_ADRES,
                        "WGS84_LA": json.DATA[i].WGS84_LA,
                        "TM_LA": json.DATA[i].TM_LA,
                        "PTHM_SCKBDCO": json.DATA[i].PTHM_SCKBDCO,
                        "REPRSNT_TLPHON2": json.DATA[i].REPRSNT_TLPHON2,
                        "INSTT_CL": json.DATA[i].INSTT_CL,
                        "ZIP": json.DATA[i].ZIP,
                        "RCPER": json.DATA[i].RCPER,
                        "INSTT_NM": json.DATA[i].INSTT_NM,
                        "WGS84_LO": json.DATA[i].WGS84_LO,
                        "MDLCNST_CL": json.DATA[i].MDLCNST_CL
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulRestaurant_EN(fs, db) {
    fs.readFile('data/SeoulRestaurant_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulRestaurant_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulRestaurant_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('SeoulRestaurant_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulRestaurant_EN({
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulRestaurant_CN(fs, db) {
    fs.readFile('data/SeoulRestaurant_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulRestaurant_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulRestaurant_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('')
                console.log('SeoulRestaurant_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulRestaurant_CN({
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "NAME_CNG": json.DATA[i].NAME_CNG,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulRestaurant_KO(fs, db) {
    fs.readFile('data/SeoulRestaurant_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulRestaurant_KO.find({}, (err, result)=>{
            if(err){
                console.log("SeoulRestaurant_KO Error")
                throw err
            }
            else if(!result[0]){
                console.log('')
                console.log('SeoulRestaurant_KO DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulRestaurant_KO({
                        "H_KOR_GU": json.DATA[i].H_KOR_GU,
                        "H_KOR_CITY": json.DATA[i].H_KOR_CITY,
                        "NM_DP": json.DATA[i].NM_DP,
                        "CATE3_NAME": json.DATA[i].CATE3_NAME,
                        "NAME_KOR": json.DATA[i].NAME_KOR,
                        "CATE2_NAME": json.DATA[i].CATE2_NAME,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_KOR_DONG": json.DATA[i].H_KOR_DONG,
                        "CATE1_NAME": json.DATA[i].CATE1_NAME
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulHotel_EN(fs, db) {
    fs.readFile('data/SeoulHotel_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulHotel_EN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulHotel_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('')
                console.log('SeoulHotel_EN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulHotel_EN({
                        "H_ENG_CITY": json.DATA[i].H_ENG_CITY,
                        "NAME_ENG": json.DATA[i].NAME_ENG,
                        "H_ENG_GU": json.DATA[i].H_ENG_GU,
                        "H_ENG_DONG": json.DATA[i].H_ENG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulHotel_CN(fs, db) {
    fs.readFile('data/SeoulHotel_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulHotel_CN.find({}, (err, result)=>{
            if(err){
                console.log("SeoulHotel_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('')
                console.log('SeoulHotel_CN DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulHotel_CN({
                        "H_CNG_CITY": json.DATA[i].H_CNG_CITY,
                        "NAME_CNG": json.DATA[i].NAME_CNG,
                        "H_CNG_GU": json.DATA[i].H_CNG_GU,
                        "H_CNG_DONG": json.DATA[i].H_CNG_DONG,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY
                    })
                    savedata.save()
                }
            }
        })
    })
}

function SeoulHotel_KO(fs, db) {
    fs.readFile('data/SeoulHotel_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.SeoulHotel_KO.find({}, (err, result)=>{
            if(err){
                console.log("SeoulHotel_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('')
                console.log('SeoulHotel_KO DATA_LENGTH : '+json.DATA.length)
                for (var i = 0;i<json.DATA.length;i++){
                    var savedata = new db.SeoulHotel_KO({
                        "H_KOR_GU": json.DATA[i].H_KOR_GU,
                        "ADD_KOR_ROAD": json.DATA[i].ADD_KOR_ROAD,
                        "CATE4_NAME": json.DATA[i].CATE4_NAME,
                        "H_KOR_CITY": json.DATA[i].H_KOR_CITY,
                        "NM_DP": json.DATA[i].NM_DP,
                        "CATE3_NAME": json.DATA[i].CATE3_NAME,
                        "ADD_KOR": json.DATA[i].ADD_KOR,
                        "NAME_KOR": json.DATA[i].NAME_KOR,
                        "CATE2_NAME": json.DATA[i].CATE2_NAME,
                        "MAIN_KEY": json.DATA[i].MAIN_KEY,
                        "H_KOR_DONG": json.DATA[i].H_KOR_DONG,
                        "CATE1_NAME": json.DATA[i].CATE1_NAME
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuStoryTelling_KO(fs, db, node_xj) {
    fs.readFile('data/JungGuStoryTelling_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuStoryTelling_KO.find({}, (err, result)=>{
            if(err){
                console.log("JungGuStoryTelling_KO Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuStoryTelling_KO DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuStoryTelling_KO({
                        "예약": json[i].예약,
                        "상세고유순번": json[i].상세고유순번,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "개요": json[i].개요,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "지역": json[i].지역,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식,
                        "전화번호": json[i].전화번호,
                        "지정현황": json[i].지정현황,
                        "휴무일": json[i].휴무일,
                        "이용시간": json[i].이용시간,
                        "이용요금": json[i].이용요금,
                        "주차": json[i].주차,
                        "장애인편의시설": json[i].장애인편의시설,
                        "체험안내": json[i].체험안내,
                        "안내서비스": json[i].안내서비스
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuStoryTelling_EN(fs, db, node_xj) {
    fs.readFile('data/JungGuStoryTelling_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuStoryTelling_EN.find({}, (err, result)=>{
            if(err){
                console.log("JungGuStoryTelling_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuStoryTelling_EN DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuStoryTelling_EN({
                        "예약": json[i].예약,
                        "상세고유순번": json[i].상세고유순번,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "개요": json[i].개요,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "지역": json[i].지역,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식,
                        "전화번호": json[i].전화번호,
                        "지정현황": json[i].지정현황,
                        "휴무일": json[i].휴무일,
                        "이용시간": json[i].이용시간,
                        "이용요금": json[i].이용요금,
                        "주차": json[i].주차,
                        "장애인편의시설": json[i].장애인편의시설,
                        "체험안내": json[i].체험안내,
                        "안내서비스": json[i].안내서비스
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuStoryTelling_JP(fs, db, node_xj) {
    fs.readFile('data/JungGuStoryTelling_JP.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuStoryTelling_JP.find({}, (err, result)=>{
            if(err){
                console.log("JungGuStoryTelling_JP Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuStoryTelling_JP DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuStoryTelling_JP({
                        "예약": json[i].예약,
                        "상세고유순번": json[i].상세고유순번,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "개요": json[i].개요,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "지역": json[i].지역,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식,
                        "전화번호": json[i].전화번호,
                        "지정현황": json[i].지정현황,
                        "휴무일": json[i].휴무일,
                        "이용시간": json[i].이용시간,
                        "이용요금": json[i].이용요금,
                        "주차": json[i].주차,
                        "장애인편의시설": json[i].장애인편의시설,
                        "체험안내": json[i].체험안내,
                        "안내서비스": json[i].안내서비스
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuStoryTelling_CN(fs, db, node_xj) {
    fs.readFile('data/JungGuStoryTelling_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuStoryTelling_CN.find({}, (err, result)=>{
            if(err){
                console.log("JungGuStoryTelling_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuStoryTelling_CN DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuStoryTelling_CN({
                        "예약": json[i].예약,
                        "상세고유순번": json[i].상세고유순번,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "개요": json[i].개요,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "지역": json[i].지역,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식,
                        "전화번호": json[i].전화번호,
                        "지정현황": json[i].지정현황,
                        "휴무일": json[i].휴무일,
                        "이용시간": json[i].이용시간,
                        "이용요금": json[i].이용요금,
                        "주차": json[i].주차,
                        "장애인편의시설": json[i].장애인편의시설,
                        "체험안내": json[i].체험안내,
                        "안내서비스": json[i].안내서비스
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuHistoryCulture_KO(fs, db, node_xj) {
    fs.readFile('data/JungGuHistoryCulture_KO.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuHistoryCulture_KO.find({}, (err, result)=>{
            if(err){
                console.log("JungGuHistoryCulture_KO Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuHistoryCulture_KO DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuHistoryCulture_KO({
                        "등록일": json[i].등록일,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "지역": json[i].지역,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "개요": json[i].개요,
                        "역사정보": json[i].역사정보,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "시작일": json[i].시작일,
                        "인물": json[i].인물,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuHistoryCulture_EN(fs, db, node_xj) {
    fs.readFile('data/JungGuHistoryCulture_EN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuHistoryCulture_EN.find({}, (err, result)=>{
            if(err){
                console.log("JungGuHistoryCulture_EN Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuHistoryCulture_EN DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuHistoryCulture_EN({
                        "등록일": json[i].등록일,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "지역": json[i].지역,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "개요": json[i].개요,
                        "역사정보": json[i].역사정보,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "시작일": json[i].시작일,
                        "인물": json[i].인물,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuHistoryCulture_JP(fs, db, node_xj) {
    fs.readFile('data/JungGuHistoryCulture_JP.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuHistoryCulture_JP.find({}, (err, result)=>{
            if(err){
                console.log("JungGuHistoryCulture_JP Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuHistoryCulture_JP DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuHistoryCulture_JP({
                        "등록일": json[i].등록일,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "지역": json[i].지역,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "개요": json[i].개요,
                        "역사정보": json[i].역사정보,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "시작일": json[i].시작일,
                        "인물": json[i].인물,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식
                    })
                    savedata.save()
                }
            }
        })
    })
}

function JungGuHistoryCulture_CN(fs, db, node_xj) {
    fs.readFile('data/JungGuHistoryCulture_CN.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.JungGuHistoryCulture_CN.find({}, (err, result)=>{
            if(err){
                console.log("JungGuHistoryCulture_CN Error")
                throw err
            }
            else if(!result[0]){
                console.log('JungGuHistoryCulture_CN DATA_LENGTH : '+json.length)
                for (var i = 0;i<json.length;i++){
                    var savedata = new db.JungGuHistoryCulture_CN({
                        "등록일": json[i].등록일,
                        "관리번호": json[i].관리번호,
                        "명칭": json[i].명칭,
                        "관련항목": json[i].관련항목,
                        "연계자원": json[i].연계자원,
                        "경도정보": json[i].경도정보,
                        "위도정보": json[i].위도정보,
                        "이명칭": json[i].이명칭,
                        "지역": json[i].지역,
                        "지번주소": json[i].지번주소,
                        "도로명주소": json[i].도로명주소,
                        "개요": json[i].개요,
                        "역사정보": json[i].역사정보,
                        "시대분류": json[i].시대분류,
                        "주제분류": json[i].주제분류,
                        "시작일": json[i].시작일,
                        "인물": json[i].인물,
                        "제공기관": json[i].제공기관,
                        "언어유형": json[i].언어유형,
                        "제작일": json[i].제작일,
                        "유형": json[i].유형,
                        "형식": json[i].형식
                    })
                    savedata.save()
                }
            }
        })
    })
}