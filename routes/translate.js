module.exports = translate

function translate(app, request) {
    app.post('/translate', (req, res)=>{
        var body = req.body
        var options = {
            method: 'POST',
            url: 'https://openapi.naver.com/v1/papago/n2mt',
            headers: {
                'postman-token': 'a40cc3eb-9fde-fa66-af9a-4401b80fb464',
                'cache-control': 'no-cache',
                'x-naver-client-secret': 'kPA7UmMe1v',
                'x-naver-client-id': 'I3DQKmeunW3Mk1kiEJOd',
                'content-type': 'application/x-www-form-urlencoded'
            },
            form: {
                source: body.source,
                target: body.target,
                text: body.text
            }
        };
        request(options, (error, response, body)=>{
            if (error) throw new Error(error);
            translatedata = JSON.parse(body).message.result.translatedText
            console.log(body)
            res.send(200, translatedata)
        });
    })
}