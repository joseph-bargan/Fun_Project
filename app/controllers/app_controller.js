var path = require('path');

//Controller functions called on by the route script

exports.home= function(req,res){
    res.render('home.html');
}