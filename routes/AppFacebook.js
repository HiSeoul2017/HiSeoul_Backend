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
        clientID : "2114302785460012",
        clientSecret : "681a0bd1572ebd8b36e040f3a550f883",
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