module.exports = Appfacebook

function Appfacebook(app, db, passport, AppFacebookStrategy) {

    passport.serializeUser((user, done)=>{
        console.log("serialize")
        done(null, user);
    });

    passport.deserializeUser((user, done)=>{
        console.log("deserialize")
        done(null, user);
    });

    passport.use(new AppFacebookStrategy({
        clientID : "1649437005348937",
        clientSecret : "5452e5edeb1623b12b87efd4692feb98",
    }, (accessToken, refreshToken, profile, done)=>{
        console.log('======== PROFILE ========')
        console.log(profile)
        done(null, user)
    }));


    app.get('/facebook/app', passport.authenticate('facebook-token'), (req, res)=>{
        console.log("USER_TOKEN ==== " + req.param('access_token'));
        console.log(req.param('access_token'))
        if(req.user){
            console.log(req.user)
        }
        else if(!req.user){
            res.send(401, "Can't find User On Facebook. It May Be Unusable.");
        }
    });

}