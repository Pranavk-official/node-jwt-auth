exports.signup_get = (req,res)=> {
    res.render('signup')
}
exports.login_get = (req,res)=> {
    res.render('login')
}
exports.signup_post = (req,res)=> {
    res.send('new signup')
}
exports.login_post = (req,res)=> {
    res.send('user login')
}