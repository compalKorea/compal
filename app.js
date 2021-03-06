var express = require('express')
    , http = require('http')
    , methodOverride = require('method-override') // methodOverride
    , favicon = require('static-favicon')
    , bodyParser = require('body-parser')
    , morgan = require('morgan'); // logger;


var app = express();
var router = express.Router();

// all environments
app.set('port', process.env.PORT || 8001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan()); // logger
app.use(express.static('public')); // static
// session을 사용할려면 cookieParser를 먼저 선언해줘야된다.
app.use(router);
app.use(bodyParser({uploadDir: (__dirname+'/public/upload')}));
app.use(methodOverride());

/*app.post('/sendIdea', function(req, res){
    idea.ideaRoute(req, res);
});

app.get('/download/:fileName', function(req, res){
    res.header("Content-Type", "application/json; charset=euc-kr");
    var fileName = req.params.fileName;
    res.download('/compal/file/'+fileName, querystring.escape('회원.xlsx'));
});*/

app.get("/", function(req, res){
    /*res.redirect('/html/coming_soon.html');*/
    res.redirect('/html/index.html');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});