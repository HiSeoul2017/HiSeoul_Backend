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

var SeoulMotel_EN_Schema = new schema({
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "H_ENG_GU": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String}
})

var SeoulMotel_CN_Schema = new schema({
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulMotel_KO_Schema = new schema({
    "H_KOR_GU": {type:String},
    "H_KOR_CITY": {type:String},
    "NM_DP": {type:String},
    "CATE3_NAME": {type:String},
    "NAME_KOR": {type:String},
    "CATE2_NAME": {type:String},
    "MAIN_KEY": {type:String},
    "H_KOR_DONG": {type:String},
    "CATE1_NAME": {type:String}
})

var SeoulInfo_EN_Schema = new schema({
    "H_ENG_GU": {type:String},
    "TEL": {type:String},
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "MAIN_KEY": {type:String},
    "H_ENG_DONG": {type:String}
})

var SeoulInfo_CN_Schema = new schema({
    "TEL": {type:String},
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulInfo_KO_Schema = new schema({
    "H_KOR_GU": {type:String},
    "TEL": {type:String},
    "H_KOR_CITY": {type:String},
    "ADD_KOR": {type:String},
    "NAME_KOR": {type:String},
    "MAIN_KEY": {type:String},
    "H_KOR_DONG": {type:String}
})

var SeoulBus_EN_Schema = new schema({
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "H_ENG_GU": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String},
    "MNG_NO": {type:String},
})

var SeoulBus_CN_Schema = new schema({
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "MNG_NO": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulBukChon_EN_Schema = new schema({
    "SERVICE_OK": {type:String},
    "HOUSE_TYPE": {type:String},
    "PRIORITY": {type:String},
    "HOUSE_ID": {type:String},
    "HOUSE_TELL": {type:String},
    "LANGUAGE_TYPE": {type:String},
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "H_ENG_GU": {type:String},
    "HOUSE_REG_DATE": {type:String},
    "HOUSE_HP": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String},
    "HOUSE_OPEN_TIME": {type:String},
    "HOUSE_YEAR": {type:String}
})

var SeoulBukChon_CN_Schema = new schema({
    "SERVICE_OK": {type:String},
    "HOUSE_TYPE": {type:String},
    "PRIORITY": {type:String},
    "HOUSE_ID": {type:String},
    "NAME_CNG": {type:String},
    "HOUSE_TELL": {type:String},
    "LANGUAGE_TYPE": {type:String},
    "H_CNG_CITY": {type:String},
    "HOUSE_REG_DATE": {type:String},
    "HOUSE_HP": {type:String},
    "MAIN_KEY": {type:String},
    "HOUSE_OPEN_TIME": {type:String},
    "HOUSE_YEAR": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String}
})

var SeoulBukChon_KO_Schema = new schema({
    "SERVICE_OK": {type:String},
    "HOUSE_TYPE": {type:String},
    "PRIORITY": {type:String},
    "HOUSE_ID": {type:String},
    "HOUSE_ADDR": {type:String},
    "HOUSE_NAME": {type:String},
    "BOOL_CULTURE": {type:String},
    "HOUSE_TELL": {type:String},
    "LANGUAGE_TYPE": {type:String},
    "TYPE_NAME": {type:String},
    "HOUSE_OWNER": {type:String},
    "HOUSE_ADMIN": {type:String},
    "HOUSE_REG_DATE": {type:String},
    "HOUSE_HP": {type:String},
    "HOUSE_OPEN_TIME": {type:String},
    "HOUSE_YEAR": {type:String}
})

var SeoulMedi_CN_Schema = new schema({
    "TEL": {type:String},
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulMedi_EN_Schema = new schema({
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "TEL": {type:String},
    "H_ENG_GU": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String}
})

var SeoulMinBak_EN_Schema = new schema({
    "ROOM": {type:String},
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "H_ENG_GU": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String}
})

var SeoulMinBak_CN_Schema = new schema({
    "ROOM": {type:String},
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulMinBak_KO_Schema = new schema({
    "ROOM": {type:String},
    "H_KOR_GU": {type:String},
    "ADD_KOR_ROAD": {type:String},
    "H_KOR_CITY": {type:String},
    "NOTE": {type:String},
    "ADD_KOR": {type:String},
    "NAME_KOR": {type:String},
    "MAIN_KEY": {type:String},
    "PART": {type:String},
    "H_KOR_DONG": {type:String}
})

var SeoulYuJuk_EN_Schema = new schema({
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "H_ENG_GU": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String}
})

var SeoulYuJuk_CN_Schema = new schema({
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulYuJuk_KO_Schema = new schema({
    "H_KOR_GU": {type:String},
    "ADD_KOR_ROAD": {type:String},
    "H_KOR_CITY": {type:String},
    "CATE3_NAME": {type:String},
    "ADD_KOR": {type:String},
    "NAME_KOR": {type:String},
    "CATE2_NAME": {type:String},
    "MAIN_KEY": {type:String},
    "H_KOR_DONG": {type:String},
    "CATE1_NAME": {type:String}
})

var SeoulEmergency_Schema = new schema({
    "REPRSNT_TLPHON": {type:String},
    "AREA": {type:String},
    "TM_LO": {type:String},
    "FXNUM": {type:String},
    "CHILD_NIGHTCLNIC": {type:String},
    "EMRRM_DIRECTTLPHON": {type:String},
    "SN": {type:String},
    "INSTT_ADRES": {type:String},
    "WGS84_LA": {type:String},
    "TM_LA": {type:String},
    "PTHM_SCKBDCO": {type:String},
    "REPRSNT_TLPHON2": {type:String},
    "INSTT_CL": {type:String},
    "ZIP": {type:String},
    "RCPER": {type:String},
    "INSTT_NM": {type:String},
    "WGS84_LO": {type:String},
    "MDLCNST_CL": {type:String}
})

var SeoulRestaurant_EN_Schema = new schema({
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "H_ENG_GU": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String}
})

var SeoulRestaurant_CN_Schema = new schema({
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulRestaurant_KO_Schema = new schema({
    "H_KOR_GU": {type:String},
    "H_KOR_CITY": {type:String},
    "NM_DP": {type:String},
    "CATE3_NAME": {type:String},
    "NAME_KOR": {type:String},
    "CATE2_NAME": {type:String},
    "MAIN_KEY": {type:String},
    "H_KOR_DONG": {type:String},
    "CATE1_NAME": {type:String}
})

var SeoulHotel_EN_Schema = new schema({
    "H_ENG_CITY": {type:String},
    "NAME_ENG": {type:String},
    "H_ENG_GU": {type:String},
    "H_ENG_DONG": {type:String},
    "MAIN_KEY": {type:String}
})

var SeoulHotel_CN_Schema = new schema({
    "H_CNG_CITY": {type:String},
    "MAIN_KEY": {type:String},
    "H_CNG_GU": {type:String},
    "H_CNG_DONG": {type:String},
    "NAME_CNG": {type:String}
})

var SeoulHotel_KO_Schema = new schema({
    "H_KOR_GU": {type:String},
    "ADD_KOR_ROAD": {type:String},
    "CATE4_NAME": {type:String},
    "H_KOR_CITY": {type:String},
    "NM_DP": {type:String},
    "CATE3_NAME": {type:String},
    "ADD_KOR": {type:String},
    "NAME_KOR": {type:String},
    "CATE2_NAME": {type:String},
    "MAIN_KEY": {type:String},
    "H_KOR_DONG": {type:String},
    "CATE1_NAME": {type:String}
})

var JungGuStoryTelling_Schema = new schema({
    "예약": {type:String},
    "상세고유순번": {type:String},
    "관리번호": {type:String},
    "명칭": {type:String},
    "관련항목": {type:String},
    "연계자원": {type:String},
    "경도정보": {type:String},
    "위도정보": {type:String},
    "이명칭": {type:String},
    "개요": {type:String},
    "시대분류": {type:String},
    "주제분류": {type:String},
    "지번주소": {type:String},
    "도로명주소": {type:String},
    "지역": {type:String},
    "제공기관": {type:String},
    "언어유형": {type:String},
    "제작일": {type:String},
    "유형": {type:String},
    "형식": {type:String},
    "전화번호": {type:String},
    "지정현황": {type:String},
    "휴무일": {type:String},
    "이용시간": {type:String},
    "이용요금": {type:String},
    "주차": {type:String},
    "장애인편의시설": {type:String},
    "체험안내": {type:String},
    "안내서비스": {type:String}
})

var JungGuHistoryCulture_Schema = new schema({
    "등록일": {type:String},
    "관리번호": {type:String},
    "명칭": {type:String},
    "관련항목": {type:String},
    "연계자원": {type:String},
    "경도정보": {type:String},
    "위도정보": {type:String},
    "이명칭": {type:String},
    "지역": {type:String},
    "지번주소": {type:String},
    "도로명주소": {type:String},
    "개요": {type:String},
    "역사정보": {type:String},
    "시대분류": {type:String},
    "주제분류": {type:String},
    "시작일": {type:String},
    "인물": {type:String},
    "제공기관": {type:String},
    "언어유형": {type:String},
    "제작일": {type:String},
    "유형": {type:String},
    "형식": {type:String}
})

var Data = mongoose.model('data', DataSchema)
var SeoulMotel_EN = mongoose.model('SeoulMotel_EN', SeoulMotel_EN_Schema)
var SeoulMotel_CN = mongoose.model('SeoulMotel_CN', SeoulMotel_CN_Schema)
var SeoulMotel_KO = mongoose.model('SeoulMotel_KO', SeoulMotel_KO_Schema)
var SeoulInfo_EN = mongoose.model('SeoulInfo_EN', SeoulInfo_EN_Schema)
var SeoulInfo_KO = mongoose.model('SeoulInfo_KO', SeoulInfo_KO_Schema)
var SeoulInfo_CN = mongoose.model('SeoulInfo_CN', SeoulInfo_CN_Schema)
var SeoulBus_EN = mongoose.model('SeoulBus_EN', SeoulBus_EN_Schema)
var SeoulBus_CN = mongoose.model('SeoulBus_CN', SeoulBus_CN_Schema)
var SeoulBukChon_EN = mongoose.model('SeoulBukChon_EN', SeoulBukChon_EN_Schema)
var SeoulBukChon_CN = mongoose.model('SeoulBukChon_CN', SeoulBukChon_CN_Schema)
var SeoulBukChon_KO = mongoose.model('SeoulBukChon_KO', SeoulBukChon_KO_Schema)
var SeoulMedi_EN = mongoose.model('SeoulMedi_EN', SeoulMedi_EN_Schema)
var SeoulMedi_CN = mongoose.model('SeoulMedi_CN', SeoulMedi_CN_Schema)
var SeoulMinBak_EN = mongoose.model('SeoulMinBak_EN', SeoulMinBak_EN_Schema)
var SeoulMinBak_CN = mongoose.model('SeoulMinBak_CN', SeoulMinBak_CN_Schema)
var SeoulMinBak_KO = mongoose.model('SeoulMinBak_KO', SeoulMinBak_KO_Schema)
var SeoulYuJuk_EN = mongoose.model('SeoulYuJuk_EN', SeoulYuJuk_EN_Schema)
var SeoulYuJuk_CN = mongoose.model('SeoulYuJuk_CN', SeoulYuJuk_CN_Schema)
var SeoulYuJuk_KO = mongoose.model('SeoulYuJuk_KO', SeoulYuJuk_KO_Schema)
var SeoulEmergency = mongoose.model('SeoulEmergency', SeoulEmergency_Schema)
var SeoulRestaurant_EN = mongoose.model('SeoulRestaurant_EN', SeoulRestaurant_EN_Schema)
var SeoulRestaurant_CN = mongoose.model('SeoulRestaurant_CN', SeoulRestaurant_CN_Schema)
var SeoulRestaurant_KO = mongoose.model('SeoulRestaurant_KO', SeoulRestaurant_KO_Schema)
var SeoulHotel_EN = mongoose.model('SeoulHotel_EN', SeoulHotel_EN_Schema)
var SeoulHotel_CN = mongoose.model('SeoulHotel_CN', SeoulHotel_CN_Schema)
var SeoulHotel_KO = mongoose.model('SeoulHotel_KO', SeoulHotel_KO_Schema)
var JungGuStoryTelling_KO = mongoose.model('JungGuStoryTelling_KO', JungGuStoryTelling_Schema)
var JungGuStoryTelling_EN = mongoose.model('JungGuStoryTelling_EN', JungGuStoryTelling_Schema)
var JungGuStoryTelling_JP = mongoose.model('JungGuStoryTelling_JP', JungGuStoryTelling_Schema)
var JungGuStoryTelling_CN = mongoose.model('JungGuStoryTelling_CN', JungGuStoryTelling_Schema)
var JungGuHistoryCulture_KO = mongoose.model('JungGuHistoryCulture_KO', JungGuHistoryCulture_Schema)
var JungGuHistoryCulture_EN = mongoose.model('JungGuHistoryCulture_EN', JungGuHistoryCulture_Schema)
var JungGuHistoryCulture_JP = mongoose.model('JungGuHistoryCulture_JP', JungGuHistoryCulture_Schema)
var JungGuHistoryCulture_CN = mongoose.model('JungGuHistoryCulture_CN', JungGuHistoryCulture_Schema)

exports.db = db
exports.Data = Data
exports.SeoulMotel_EN = SeoulMotel_EN
exports.SeoulMotel_CN = SeoulMotel_CN
exports.SeoulMotel_KO = SeoulMotel_KO
exports.SeoulInfo_EN = SeoulInfo_EN
exports.SeoulInfo_CN = SeoulInfo_CN
exports.SeoulInfo_KO = SeoulInfo_KO
exports.SeoulBus_EN = SeoulBus_EN
exports.SeoulBus_CN = SeoulBus_CN
exports.SeoulBukChon_EN = SeoulBukChon_EN
exports.SeoulBukChon_CN = SeoulBukChon_CN
exports.SeoulBukChon_KO = SeoulBukChon_KO
exports.SeoulMedi_EN = SeoulMedi_EN
exports.SeoulMedi_CN = SeoulMedi_CN
exports.SeoulMinBak_EN = SeoulMinBak_EN
exports.SeoulMinBak_CN = SeoulMinBak_CN
exports.SeoulMinBak_KO = SeoulMinBak_KO
exports.SeoulYuJuk_EN = SeoulYuJuk_EN
exports.SeoulYuJuk_CN = SeoulYuJuk_CN
exports.SeoulYuJuk_KO = SeoulYuJuk_KO
exports.SeoulEmergency = SeoulEmergency
exports.SeoulRestaurant_EN = SeoulRestaurant_EN
exports.SeoulRestaurant_CN = SeoulRestaurant_CN
exports.SeoulRestaurant_KO = SeoulRestaurant_KO
exports.SeoulHotel_EN = SeoulHotel_EN
exports.SeoulHotel_CN = SeoulHotel_CN
exports.SeoulHotel_KO = SeoulHotel_KO
exports.JungGuStoryTelling_KO = JungGuStoryTelling_KO
exports.JungGuStoryTelling_JP = JungGuStoryTelling_JP
exports.JungGuStoryTelling_EN = JungGuStoryTelling_EN
exports.JungGuStoryTelling_CN = JungGuStoryTelling_CN
exports.JungGuHistoryCulture_KO = JungGuHistoryCulture_KO
exports.JungGuHistoryCulture_EN = JungGuHistoryCulture_EN
exports.JungGuHistoryCulture_JP = JungGuHistoryCulture_JP
exports.JungGuHistoryCulture_CN = JungGuHistoryCulture_CN