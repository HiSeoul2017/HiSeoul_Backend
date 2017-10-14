module.exports = WebFacebook

function WebFacebook(app, db, passport, WebFacebookStrategy) {

    passport.use(new WebFacebookStrategy({
        clientID : "2114302785460012",
        clientSecret : "681a0bd1572ebd8b36e040f3a550f883",
        callbackURL : '/facebook/web/callback',
        profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'verified'],
    }, (accessToken, refreshToken, profile, done)=>{
        console.log(profile)
        done(null, user)
    }));

    app.get('/facebook/web', passport.authenticate('facebook'), (req, res)=>{
        console.log('=================')
        console.log(req.user)
    })

    app.get('/facebook/web/callback',
        passport.authenticate('facebook',
            {
                successRedirect: '/',
                failureRedirect: '/'
            }));

}