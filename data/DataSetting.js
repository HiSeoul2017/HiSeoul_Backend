module.exports = DataSetting

function DataSetting(fs, db) {
    fs.readFile('data/SeoulData.json', 'utf-8', (err, data)=>{
        var json = JSON.parse(data)
        db.Data.find({}, (err, result)=>{
            if(err){
                console.log("DataSetting Error")
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