/**
 * Created by Administrator on 2014-06-18.
 */
var multiparty = require('multiparty');
var util = require('util');
var DBpool  = require('../util/DBpool.js');
var errorR = require('../routes/errRoute.js');
var email = require('../util/mailUtil.js');
var property  = require('../util/property.js');

/**
 * 아이디어 라우터
 *errRoute.js
 * @param req
 * @param res
 * @param param
 */
exports.ideaRoute = function (req, res){
    var form = new multiparty.Form();
    form.uploadDir = "./public/upload";
    form.maxFilesSize   = 1048576 * 3;

    form.parse(req, function(err, fields, files) {
        if(err){
            res.send({err : err.message}); return;
        }
        res.set('Content-Type', 'text/html');

        if('' == fields.content || null == fields.content){ res.send({err : 'Please check the content.'}); return; }
        if('' == fields.email || null == fields.email){ res.send({err : 'Please check the email.'}); return; }
        if('' == fields.name || null == fields.name){ res.send({err : 'Please check the name.'}); return; }

        DBpool.acquire(function(error, db) {
            db.beginTransaction(function (error) {
                try {
                    if (error) {
                        return errorR.throwDbError(res, error, DBpool, db, property.errorMessage().search);
                    }

                    var title = "<" + fields.name + ">님의 아이디어";

                    db.query("insert into board(division, title, content, name, id, regDt, email) values(?, ?, ?, ?, ?, now(),?)"
                        , ["idea", title, fields.content, fields.name, "idea", fields.email], function (err, result) {
                            if (err) {
                                return error.tranError(res, err, DBpool, db, property.errorMessage().insert);
                            }

                            if(files.myFile == null){
                                db.commit(function (error) {
                                    if (error) {
                                        return error.tranError(res, error, DBpool, db, property.errorMessage().insert);
                                    }
                                    res.send('');
                                });
                            }else{
                                var parentsSeq = result.insertId.toString();
                                var resultObj = {
                                    result: 'ok',
                                    realName: files.myFile[0].originalFilename.toString(),
                                    path: files.myFile[0].path.toString(),
                                    url: "/upload/" + files.myFile[0].path.toString().split('\\')[2],
                                    virtualName: files.myFile[0].path.toString().split('\\')[2],
                                    originalFilename: files.myFile[0].originalFilename.toString(),
                                    size: files.myFile[0].size.toString()
                                };

                                db.query("insert into fileUpload(realName, url, path, virtualName, parentsSeq, division) values(?, ?, ?, ?, ?, 'idea')"
                                    , [resultObj.realName, resultObj.url, resultObj.path, resultObj.virtualName, parentsSeq,"idea"], function (err, result) {
                                        if (error) {return error.tranError(res, error, DBpool, db, property.errorMessage().insert);}

                                        db.commit(function (error) {
                                            if (error) {return error.tranError(res, error, DBpool, db, property.errorMessage().insert);}
                                        });
                                        res.send('');
                                        res.end(util.inspect({fields: fields, files: files}));
                                    });
                            }
                            email.sendMail('mayajuni10@gmail.com', '[idea 공모] ' + title, fields.content.toString());
                        });
                } finally {
                    DBpool.release(db);
                }
            });
        });
    });
};