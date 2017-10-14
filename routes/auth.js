module.exports = auth

function auth(app, db, RandomString, crypto) {
    app.post('/auth/register', (req, res)=>{
        var body = req.body
        db.User.findOne({
            id : body.id
        }, (err, data)=>{
            if(err){
                console.log('/auth/register findOne Error')
                res.send(500, '/auth/register findOne Error')
                throw err
            }
            else if(data){
                res.send(403, 'Already In Database')
            }
            else {
                var cryptodata = crypto.createHash('sha256')
                cryptodata.update(body.password)
                var sha256 = cryptodata.digest('hex')
                var UserData = new db.User({
                    username : body.username,
                    id : body.id,
                    password : sha256,
                    language : body.language,
                    token : RandomString.generate(15)
                })
                UserData.save((err)=>{
                    if(err){
                        console.log('/auth/register Save Error')
                        res.send(500, '/aurh/register Save Error')
                        throw err
                    }
                    else {
                        console.log(body.username+' Register Success')
                        res.send(200, UserData)
                    }
                })
            }
        })
    })

    app.post('/auth/login', (req, res)=>{
        var body = req.body
        var cryptodata = crypto.createHash('sha256')
        cryptodata.update(body.password)
        var sha256 = cryptodata.digest('hex')
        db.User.findOne({
            id : body.id
        },(err, data)=>{
            if(err){
                console.log('/auth/login findOne Error')
                res.send(500, '/auth/login findOne Error')
                throw err
            }
            else if(data){
                if(data.password == sha256){
                    console.log(data.username+' Login Success')
                    res.send(200, data)
                }
                else if(data.password != sha256){
                    res.send(401, 'Incorrect Password')
                }
            }
            else {
                res.send(404, 'User Not Founded')
            }
        })
    })
}