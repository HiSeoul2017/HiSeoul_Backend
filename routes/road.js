module.exports = road

function road(app, db, request, fs) {
    app.post('/road/find', (req, res)=>{
        var body = req.body
        var options = {
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/directions/json',
            qs:
                {
                    origin: body.mlocation,
                    destination: body.elocation,
                    mode: 'transit',
                    key: 'AIzaSyBYqFLOUoN_hk733kw15PzU4sFA2dNCLH8'
                },
            headers:
                {
                    'postman-token': 'ad29ff92-e572-6b92-dbe5-a296a137775b',
                    'cache-control': 'no-cache'
                }
        }
        request(options, (error, response, body)=>{
            if (error) throw new Error(error)
            var data = JSON.parse(body).routes[0].legs[0]
            var jsondata = {
                출발시간 : data.departure_time.text,
                도착시간 : data.arrival_time.text,
                이동거리 : data.distance.text,
                이동시간 : data.duration.text,
                출발지 : data.start_address,
                도착지 : data.end_address,
                이동횟수 : data.steps.length,
                이동방법 : []
            }
            console.log('==================================================')
            for(var i=0;i<data.steps.length;i++){
                fordata = {
                    단계 : i+1,
                    이동거리 : data.steps[i].distance.text,
                    이동시간 : data.steps[i].duration.text,
                    보여지는것 : data.steps[i].html_instructions,
                    이동수단 : data.steps[i].travel_mode
                }
                if(data.steps[i].travel_mode == 'TRANSIT'){
                    fordata.승차정류소 = data.steps[i].transit_details.departure_stop.name
                    fordata.하차정류소 = data.steps[i].transit_details.arrival_stop.name
                    fordata.탑승버스번호 = data.steps[i].transit_details.line.short_name
                    fordata.정거장수 = data.steps[i].transit_details.num_stops
                    fordata.탑승버스행선지 = data.steps[i].transit_details.headsign
                }
                jsondata.이동방법[i] = fordata
            }
            console.log(jsondata)
            console.log('==================================================')

            res.send(200, jsondata)
        });

    })
}