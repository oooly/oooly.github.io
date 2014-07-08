var moveClass = "";         //鼠标经过样式名
var moveTR = null;          //鼠标经过行
var Ptr = document.getElementById("Tab").getElementsByTagName("td");
//设置鼠标的动作事件
for (var i = 0; i < Ptr.length; i++) {
	var Owner = Ptr[i].item;        //鼠标经过事件
	Ptr[i].onmouseover = function Move()
	{
		if (moveTR != this) 
		{
			moveClass = this.className; 
			moveTR = this;
			this.className = "move";
		}
	}
	//鼠标离开事件
	Ptr[i].onmouseout = function Out() 
	{
		moveTR = null;
		this.className = moveClass;
	}
}
document.getElementById('baidutxt').focus();
