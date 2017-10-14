module.exports = WebFacebook

function WebFacebook(app, db, passport, WebFacebookStrategy) {

    passport.serializeUser(function(user, done) {
        console.log("serialize")
        console.log(user)
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        console.log("deserialize")
        console.log(user)
        done(null, user);
    });

    passport.use(new WebFacebookStrategy({ //facebook 로그인을 위한 토큰 로그인
            clientID: '1649437005348937',
            clientSecret: '5452e5edeb1623b12b87efd4692feb98',
            callbackURL: "/auth/facebook/callback",
            profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'verified'],
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile)
            console.log(accessToken)
            done(null, true)
        }
    ));

    app.get('/main', (req, res)=>{
        res.send('Hello')
    })

    app.get('/facebook/web',
        passport.authenticate('facebook', (req, res)=>{
            console.log(req.user)
        })
    );

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
            {
                successRedirect: '/main',
                failureRedirect: '/auth/facebook'
            }));
}