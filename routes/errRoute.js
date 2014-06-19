/**
 * 에러났을시
 */

exports.error = function(res, err){
	res.render('web/err', {title : err, err : err});
};


exports.throwError = function(res, err){
    console.error(err);
    res.send({err: err});
};

/**
 * 에러 처리 디비 오류시
 *
 * @param res
 * @param err
 * @param DBpool :DB 풀
 * @param db
 */
exports.throwDbError = function(res, err, DBpool,db, msg){
    DBpool.release(db);
    console.error(err);
    res.send({err: msg});
};

exports.tranError = function(res, err, DBpool,db, msg){
    db.rollback(function () {
        DBpool.release(db);
        console.error(e);
        console.error('rollback error');
        res.send({err : property.errorMessage().insert});
    });
}