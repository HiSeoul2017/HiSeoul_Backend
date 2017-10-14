module.exports = WebFacebook

function WebFacebook(app, db, passport, WebFacebookStrategy) {

    passport.serializeUser(function(user, done) {
        console.log("serialize")
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        console.log("deserialize")
        done(null, user);
    });

    passport.use(new WebFacebookStrategy({ //facebook 로그인을 위한 토큰 로그인
            clientID: '1008754382587528',
            clientSecret: '9a2de375f9350a74ec30e79f442fbec3',
            callbackURL: "/auth/facebook/callback",
            profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'verified'],
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile)
            done(null, true)
        }
    ));

    app.get('/main', (req, res)=>{
        res.send('Hello')
    })

    app.get('/auth/facebook',
        passport.authenticate('facebook', { scope: ['email', 'public_profile', 'publish_actions'] })
    );

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
            {
                successRedirect: '/main',
                failureRedirect: '/auth/facebook'
            }));
}