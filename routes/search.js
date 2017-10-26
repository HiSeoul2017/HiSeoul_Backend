module.exports = search

function search(app, db){

    app.post('/search/yujuk', (req, res)=>{
        var body = req.body
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/search/yujuk userfind Error')
                res.send(500, '/search/yujuk userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){
                    db.SeoulYuJuk_EN.find({
                        NAME_ENG : body.search
                    }, (err, result)=>{
                        if(err){
                            console.log('/search/yujuk enfind Error')
                            res.send(500, '/search/yujuk enfind Error')
                            throw err
                        }
                        else if(!result[0]){
                            res.send(404, 'EN Data Not Founded')
                        }
                        else if(result[0]){
                            res.send(200, result)
                        }
                    })
                }
                else if(result.language == 'cn'){
                    db.SeoulYuJuk_CN.find({
                        NAME_CNG : body.search
                    }, (err, result)=>{
                        if(err){
                            console.log('/search/yujuk cnfind Error')
                            res.send(500, '/search/yujuk cnfind Error')
                            throw err
                        }
                        else if(!result[0]){
                            res.send(404, 'CN Data Not Founded')
                        }
                        else if(result[0]){
                            res.send(200, result)
                        }
                    })
                }
                else if(result.language == 'ko'){
                    db.SeoulYuJuk_KO.find({
                        NAME_KOR : body.search
                    }, (err, result)=>{
                        if(err){
                            console.log('/search/yujuk kofind Error')
                            res.send(500, '/search/yujuk kofind Error')
                            throw err
                        }
                        else if(!result[0]){
                            res.send(404, 'KO Data Not Founded')
                        }
                        else if(result[0]){
                            res.send(200, result)
                        }
                    })
                }
            }
        })

    })

    app.post('/search/restaurant', (req, res)=>{
        var body = req.body
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/search/restaurant userfind Error')
                res.send(500, '/search/restaurant userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){
                    db.SeoulRestaurant_EN.find({
                        NAME_ENG : body.search
                    }, (err, result)=>{
                        if(err){
                            console.log('/search/restaurant enfind Error')
                            res.send(500, '/search/restaurant enfind Error')
                            throw err
                        }
                        else if(!result[0]){
                            res.send(404, 'EN Data Not Founded')
                        }
                        else if(result[0]) {
                            res.send(200, result)
                        }
                    })
                }
                else if(result.language == 'cn'){
                    db.SeoulRestaurant_CN.find({
                        NAME_CNG : body.search
                    }, (err, result)=>{
                        if(err){
                            console.log('/search/restaurant cnfind Error')
                            res.send(500, '/search/restaurant cnfind Error')
                            throw err
                        }
                        else if(!result[0]){
                            res.send(404, 'CN Data Not Founded')
                        }
                        else if(result[0]) {
                            res.send(200, result)
                        }
                    })
                }
                else if(result.language == 'ko'){
                    db.SeoulRestaurant_KO.find({
                        NAME_KOR : body.search
                    }, (err, result)=>{
                        if(err){
                            console.log('/search/restaurant kofind Error')
                            res.send(500, '/search/restaurant kofind Error')
                            throw err
                        }
                        else if(!result[0]){
                            res.send(404, 'KO Data Not Founded')
                        }
                        else if(result[0]) {
                            res.send(200, result)
                        }
                    })
                }
            }
        })

    })

    app.post('/search/medi', (req, res)=>{
        var body = req.body
        console.log(body)
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/search/medi userfind Error')
                res.send(500, '/search/medi userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){

                }
                else if(result.language == 'cn'){

                }
                else if(result.language == 'ko'){

                }
            }
        })
    })

    app.post('/search/info', (req, res)=>{

    })

    app.post('/search/emergency', (req, res)=>{

    })


}