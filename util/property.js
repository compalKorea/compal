/**
 * Created by Administrator on 2014-05-14.
 */
exports.authCode = function(){
    return {
        ceo : 1,
        director : 2,
        hm : 3,
        gm : 4,
        teamMember : 5
    };
}

exports.errorMessage = function(){
    return {
        insert : "Fail Insert",
        delete : "Fail Delete",
        update : "Fail Update",
        search : "Fail Search",
        approval : "Fail approval",
        wait : "Fail wait"
    }
}

exports.paingSql = function(){
    return {
        first : " select @rnum := @rnum +1, x.* from(  ",
        last : " ) x,  (select @rnum := 0) R limit ?, ?; ",
        countFist : "select count(*) as cnt from ( ",
        countLast : ") x"
    }
};

exports.smsResultCode = function(){
    return {
        sendSuccess : 1,
        sendFile : 0
    }
}