var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var fs = require('fs');
var mysql  = require('mysql');
var router = require('./router/main')(app);
var ejs = require('ejs');
var path = require('path');
var CORS = require('cors')();


app.use(CORS);
app.use(express.static(path.join(__dirname, '/public')));
console.log(__dirname)
app.set('views', __dirname + '/views');
app.set('view engine', ejs);
app.engine('html', require('ejs').renderFile);

app.get('/post3', function(req, res){
    res.send({msg: 'This is CORS-enabled for all origins!'})
})

// var pool = mysql.createPool({
//     "host": "us-cdbr-iron-east-03.cleardb.net",
//     "user": "b1d0543253c65e",
//     "password": "f4509e98",
//     "database": "heroku_82621625268bc5c",
//     "connectionLimit": 10
// });

//  var row2 = '';

// app.get('/', function(req, res){
   
//      pool.getConnection(function(err,connection){
//         var query = connection.query('select * from customer', function (err, rows) {
//             if(err)console.log("err: " + err);

//         row2 =  JSON.stringify(rows)
//           console.log("rows : " + JSON.stringify(rows));

//           //  res.render('index', {title: 'test', rows: rows});
//             res.send('일반 html 파일 보여주기 힘드네.웹페이지 보여주기 안되나'+ row2 );
//            connection.release();
           
//            //  res.send('드디어 하나 나오는군!'+ )
//         });
//         //console.log(query);
//        // res.send(row2)
//     });
    
// })

// app.get('post', function(req, res){

// })

 


   
// var connection = mysql.createConnection({
//   host     : 'us-cdbr-iron-east-03.cleardb.net',
//   user     : 'b1d0543253c65e',
//   password : 'f4509e98',
//   database: 'heroku_82621625268bc5c',
//   connectionLimit: 10
// });

// console.log('Loading function');

// connection.connect();

// connection.query('SELECT * FROM CUSTOMER', function(err, rows, fields) {
//  // if (err) throw err;
//   console.log('The name is: ', rows[0].CST_NAME);
// });

// connection.end();



app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
