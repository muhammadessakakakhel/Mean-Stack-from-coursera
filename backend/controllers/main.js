// main controller 

module.exports.home = function(req, res){
    res.render('index', {title: ' My Mean stack website'});
}

module.exports.about = function(req, res){
    res.render('about', {title: 'About'});
}

module.exports.contact = function(req, res){
    res.render('contact',{title:'Contact'} );
}

module.exports.error = function(req, res){
    res.render('error',{title:'Error'});
}

module.exports.forgotpassword = function(req, res){
    res.render('forgot-password');
}

module.exports.layout = function(req, res){
    res.render('layout');
}

module.exports.login = function(req, res){
    res.render('login', {title:'Login'});
}

module.exports.register = function(req, res){
    res.render('register', {title:'Register'});
}