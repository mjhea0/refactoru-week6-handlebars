// server side

/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3003);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/users', user.list);

app.get('/', function(req, res){
	res.render('index')
})

app.get('/search', function(req, res){
	fs.readFile(__dirname + '/search-data.json',function(error,data){
		searchData = JSON.parse(data)
		console.log(req.query.search)
    if (searchData['programming'][req.query.search]){
        res.send({results : searchData['programming'][req.query.search]["desc"]})
    } else if (searchData['search engines'][req.query.search]) {
        res.send({results : searchData['search engines'][req.query.search]["desc"]})
    } else {
        res.send({results : 'No results found'})
    }
	})
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
