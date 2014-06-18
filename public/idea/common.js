// JavaScript Document
var checkData = function (){
	this.tes = '';
};
var checkMove = new checkData();

function howMove(sym, id, onlyClose) {
    console.log(id);
	checkMove[id] = checkMove[id] == null || checkMove[id] == undefined || checkMove[id] == '' ? false : checkMove[id];
	var onlyClose = onlyClose ==null || onlyClose == undefined || onlyClose == '' ? false : onlyClose;
	if(checkMove[id]){
		sym.play('MoveDown_'+id);
		checkMove[id] = false;
	}
	else if(!onlyClose){
		sym.play('MoveUp_'+id);
		checkMove[id] = true;
	}

	return checkMove[id];
}

function submitImg(symId, imgFilePath) {
    if (checkMove["Stage_container"])
        symId.css('background-image', 'url(images/ae.png)');
    else
        symId.css('background-image', 'url('+imgFilePath+')');
}