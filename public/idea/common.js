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
    var size = document.getElementById('myFile').files[0].size/1024/1024;

    if(size > 3){
        alert("파일이 3MB 바이트를 초과 할수 없습니다.");
        return;
    }

    $('#myForm').ajaxForm({
        url : "/sendIdea",
        type : "post",
        dataType : 'json',
        success : function(data){
            console.log(data);
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