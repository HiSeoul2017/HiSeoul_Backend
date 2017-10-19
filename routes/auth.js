module.exports = auth

function auth(app, db, RandomString, crypto, nodemailer, smtpPool) {

    var config = (
        {
            "mailer": {
                "service": "Gmail",
                "host": "smtp.gmail.com",
                "port": "465",
                "secure": true,
                "user": "cho041860",
                "password": "qq**041860"
            }
        }
    )
    var transporter = nodemailer.createTransport(smtpPool({
        service: config.mailer.service,
        host: config.mailer.host,
        port: config.mailer.port,
        secure:config.mailer.secure,
        auth: {
            user: config.mailer.user,
            pass: config.mailer.password
        },
        tls: {
            rejectUnauthorize: false
        },
        maxConnections: 5,
        maxMessages: 10
    }));

    var mailOptions = {
        from: 'cho041860@gmail.com',
        to: null,
        subject: '[InsideSeoul] 발급된 임시 비밀번호 입니다',
        text: null
    };

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

    app.post('/auth/edituser', (req, res)=>{
        var body = req.body
        db.User.update({
            id : body.id
        },{$set:body}, (err)=>{
            if(err){
                console.log('/auth/edituser findOneAndUpdata Error')
                res.send(500, '/auth/edituser findOneAndUpdata Error')
                throw err
            }
            else {
                res.send(200, 'Update Success')
            }
        })
    })

    app.post('/auth/findpassword', (req, res)=>{
        var body = req.body
        var repassword = RandomString.generate(8)
        var cryptodata = crypto.createHash('sha256')
        cryptodata.update(repassword)
        var sha256 = cryptodata.digest('hex')
        var option = mailOptions;
        db.User.findOne({
            id : body.id,
            username : body.username
        }, (err, data)=>{
            if(err){
                console.log('/auth/findpasword findOne Error')
                res.send(500, '/auth/findpasword findOne Error')
                throw err
            }
            else if(!data){
                res.send(404, 'User Not Founded')
                console.log(data)
            }
            else if(data){
                option.to = body.email
                option.text = '임시비밀번호는 '+repassword+" 입니다"
                db.User.update({
                    id : body.id
                },{$set:{password:sha256}}, (err)=>{
                    if(err){
                        console.log('/auth/finepassword update Error')
                        res.send(500, '/auth/finepassword update Error')
                        throw err
                    }
                    else {
                        transporter.sendMail(option, (err, response)=>{
                            if (err) {
                                console.log('메일 발송 실패 => ' + err);
                                res.send(500, "Fail")
                            } else {
                                console.log('임시비밀번호 메일 발송 완료');
                                res.send(200,'Mail Send Success')
                            }
                            transporter.close();
                        });
                    }
                })
            }
        })
    })
}

