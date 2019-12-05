//https://codeshack.io/basic-login-system-nodejs-express-mysql/

var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');


var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Blitzcrank33!',
	database : 'nodelogin'
}); 


/*let db = Sequelize("nodelogin", "root", "Skaven33!", {
	host: "localhost",
	port: "3306",
	dialect: "mysql",
	pool: {
		max: 5, 
		min: 0,
		idle: 10000
	}
});*/

var app = express();

app.use(session({
	secret: 'quinnandtill',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	var sql = "INSERT INTO accounts (username, password) VALUES ('petey', 'peteyboy')";
	connection.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	});
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(8080, function () {
    console.log("Listening on port 8080!")
});
