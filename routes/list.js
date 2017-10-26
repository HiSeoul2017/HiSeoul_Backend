module.exports = list

function list(app, db) {

    app.post('/list/yujuk', (req, res)=>{
        var body = req.body
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/list/yujuk userfind Error')
                res.send(500, '/list/yujuk userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){
                    db.SeoulYuJuk_EN.find((err, result)=>{
                        if(err){
                            console.log('/list/yujuk enfind Error')
                            res.send(500, '/list/yujuk enfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'cn'){
                    db.SeoulYuJuk_CN.find((err, result)=>{
                        if(err){
                            console.log('/list/yujuk cnfind Error')
                            res.send(500, '/list/yujuk cnfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'ko'){
                    db.SeoulYuJuk_KO.find((err, result)=>{
                        if(err){
                            console.log('/list/yujuk kofind Error')
                            res.send(500, '/list/yujuk kofind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
            }
            else {
                res.send(404, 'User Not Founded')
            }
        })
    })

    app.post('/list/restaurant', (req, res)=>{
        var body = req.body
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/list/restaurant userfind Error')
                res.send(500, '/list/restaurant userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){
                    db.SeoulRestaurant_EN.find((err, result)=>{
                        if(err){
                            console.log('/list/restaurant enfind Error')
                            res.send(500, '/list/restaurant enfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'cn'){
                    db.SeoulRestaurant_CN.find((err, result)=>{
                        if(err){
                            console.log('/list/restaurant cnfind Error')
                            res.send(500, '/list/restaurant cnfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'ko'){
                    db.SeoulRestaurant_KO.find((err, result)=>{
                        if(err){
                            console.log('/list/restaurant kofind Error')
                            res.send(500, '/list/restaurant kofind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
            }
            else {
                res.send(404, 'User Not Founded')
            }
        })
    })

    app.post('/list/medi', (req, res)=>{
        var body = req.body
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/list/medi userfind Error')
                res.send(500, '/list/medi userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){
                    db.SeoulMedi_EN.find((err, result)=>{
                        if(err){
                            console.log('/list/medi enfind Error')
                            res.send(500, '/list/medi enfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'cn'){
                    db.SeoulMedi_CN.find((err, result)=>{
                        if(err){
                            console.log('/list/medi cnfind Error')
                            res.send(500, '/list/medi cnfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'ko'){
                    db.SeoulMedi_KO.find((err, result)=>{
                        if(err){
                            console.log('/list/yujuk kofind Error')
                            res.send(500, '/list/yujuk kofind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
            }
            else {
                res.send(404, 'User Not Founded')
            }
        })
    })

    app.post('/list/info', (req, res)=>{
        var body = req.body
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/list/info userfind Error')
                res.send(500, '/list/info userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){
                    db.SeoulInfo_EN.find((err, result)=>{
                        if(err){
                            console.log('/list/info enfind Error')
                            res.send(500, '/list/info enfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'cn'){
                    db.SeoulInfo_CN.find((err, result)=>{
                        if(err){
                            console.log('/list/info cnfind Error')
                            res.send(500, '/list/info cnfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'ko'){
                    db.SeoulInfo_KO.find((err, result)=>{
                        if(err){
                            console.log('/list/info kofind Error')
                            res.send(500, '/list/info kofind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
            }
            else {
                res.send(404, 'User Not Founded')
            }
        })
    })

    app.post('/list/emergency', (req, res)=>{
        var body = req.body
        db.User.findOne({
            token : body.token
        }, (err, result)=>{
            if(err){
                console.log('/list/emergency userfind Error')
                res.send(500, '/list/emergency userfind Error')
                throw err
            }
            else if(result){
                if(result.language == 'en'){
                    db.SeoulYuJuk_EN.find((err, result)=>{
                        if(err){
                            console.log('/list/emergency enfind Error')
                            res.send(500, '/list/emergency enfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'cn'){
                    db.SeoulYuJuk_CN.find((err, result)=>{
                        if(err){
                            console.log('/list/emergency cnfind Error')
                            res.send(500, '/list/emergency cnfind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
                else if(result.language == 'ko'){
                    db.SeoulYuJuk_KO.find((err, result)=>{
                        if(err){
                            console.log('/list/emergency kofind Error')
                            res.send(500, '/list/emergency kofind Error')
                            throw err
                        }
                        else {
                            res.send(200, result.slice(0, body.query))
                        }
                    })
                }
            }
            else {
                res.send(404, 'User Not Founded')
            }
        })
    })

}