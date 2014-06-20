// JavaScript Document
var checkData = function (){
	this.tes = '';
};
var checkMove = new checkData();

function howMove(sym, id, onlyClose) {
	checkMove[id] = checkMove[id] == null || checkMove[id] == undefined || checkMove[id] == '' ? false : checkMove[id];
	var onlyClose = onlyClose ==null || onlyClose == undefined || onlyClose == '' ? false : onlyClose;
	if(checkMove[id]){
		sym.play('MoveDown_'+id);
		checkMove[id] = false;
        if(id == "boom_bg")
            $("#Stage_boom_bg").hide();
	}
	else if(!onlyClose){
		sym.play('MoveUp_'+id);
		checkMove[id] = true;
        if(id == "boom_bg")
            $("#Stage_boom_bg").show();
	}

	return checkMove[id];
}

function submitImg(symId, imgFilePath) {
    if (checkMove["Stage_container"])
        symId.css('background-image', 'url(images/ae.png)');
    else
        symId.css('background-image', 'url('+imgFilePath+')');
}

function sendIdea(){
    if(!($('#myForm').val() == null || $('#myForm').val() == undefined || $('#myForm').val() == '')){
        var size = document.getElementById('myFile').files[0].size/1024/1024;

        if(size > 3){
            alert("파일이 3MB 바이트를 초과 할수 없습니다.");
            return;
        }
    }
    openLoadinfWindow();
    $('#myForm').ajaxForm({
        url : "/sendIdea",
        type : "post",
        dataType : 'json',
        success : function(data){
            closeLoadingWindow();
            if(data){
                alert(data.err);
                return;
            }
            alert("등록 되었습니다.!");
        }
    });
}

function getFilePath(obj){
    if(obj.value == '')
        $("#filePath").html("파일을 선택해주세요.");
    else
        $("#filePath").html(obj.value);
}

/**
 * j쿼리를 꼭 써야지만 사용 가능합니다.
 *
 * 로딩중 모달 시작 하는 부분. 꼭 closeLoadingWindow() 함수를 써야 닫아진다.
 */
function openLoadinfWindow(){
    var top = (document.body.scrollTop==0?document.documentElement.scrollTop:document.body.scrollTop) + 250;
    // 보이는 화면의 가운데
    var left = (document.body.clientWidth-100)/2;

    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    if($("#bgdiv").length == 0) {
        $('body').append('<div id="bgdiv"></div>');
        $("#bgdiv").css(
            {background: '#333333',
                width:maskWidth,
                height:maskHeight,
                position:'absolute',
                opacity:'0.6',
                'top':'0',
                'left':'0',
                'z-index':'10',
                'display':'none'
            }
        );
    }

    if($("#contentLoading").length == 0) {
        $('body').append('<div id="contentLoading"><img src="/img/ing01.gif"></div>');
        $("#contentLoading").css(
            {display: 'none',
                position: 'absolute',
                border: '1px solid #CACACA',
                'text-align': 'center',
                'background-color': 'white',
                'z-index': '9999'
            });
    }

    $("#contentLoading").css('top', top+'px');
    $("#contentLoading").css('left', left+'px');
    $("#bgdiv").show();
    $("#contentLoading").show();
}

/**
 * 로딩중 모달 닫기 openLoadingWindow() 함수를 사용시 모달을 닫아주는 역활을 한다.
 */
function closeLoadingWindow(){
    $("#contentLoading").fadeOut("fast");
    $("#bgdiv").fadeOut("fast");
}