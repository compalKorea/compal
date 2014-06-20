var express = require('express')
    , http = require('http')
    , path = require('path')
    , methodOverride = require('method-override') // methodOverride
    , favicon = require('static-favicon')
    , bodyParser = require('body-parser')
    , morgan = require('morgan') // logger
    , multiparty = require('multiparty')
    , util = require('util')
    , idea = require('./routes/ideaRoute.js');



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

app.post('/fileUpload', function(req, res){
    var form = new multiparty.Form();
    form.uploadDir = "./public/upload";
    form.maxFilesSize = 1048576*2;
/*
    form.on('error', function(err) {
        console.log('Error parsing form: ' + err.stack);
    });

    // Parts are emitted when parsing the form
    form.on('part', function(part) {
        // You *must* act on the part by reading it
        // NOTE: if you want to ignore it, just call "part.resume()"

        if (part.filename === null) {
            // filename is "null" when this is a field and not a file
            console.log('got field named ' + part.name);
            // ignore field's content
            part.resume();
        }

        if (part.filename !== null) {
            // filename is not "null" when this is a file
            console.log('got file named ' + part.name);
            // ignore file's content here
            part.resume();
        }
    });

// Parse req
    form.parse(req);*/

    form.parse(req, function(err, fields, files) {
        console.log(files.myFile == null);
        console.log(null == files.myFile ? 'a' : 'b');
        return;
        res.set('Content-Type', 'text/html');
        res.writeHead(200, {'content-type': 'text/plain'});
        var resultObj = {
            result: 'ok',
            realName: files.myFile[0].originalFilename.toString(),
            path: files.myFile[0].path.toString(),
            url: "/upload/" + files.myFile[0].path.toString().split('\\')[2],
            virtualName: files.myFile[0].path.toString().split('\\')[2],
            originalFilename : files.myFile[0].originalFilename.toString(),
            size : files.myFile[0].size.toString()
        };
        res.send(resultObj);
        res.end(util.inspect({fields: fields, files: files}));
    });
});

app.post('/sendIdea', function(req, res){
    idea.ideaRoute(req, res);
});

app.get("/", function(req, res){
    res.redirect('/html/coming_soon.html');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});