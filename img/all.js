var moveClass = "";         //��꾭����ʽ��
var moveTR = null;          //��꾭����
var Ptr = document.getElementById("Tab").getElementsByTagName("td");
//�������Ķ����¼�
for (var i = 0; i < Ptr.length; i++) {
	var Owner = Ptr[i].item;        //��꾭���¼�
	Ptr[i].onmouseover = function Move()
	{
		if (moveTR != this) 
		{
			moveClass = this.className; 
			moveTR = this;
			this.className = "move";
		}
	}
	//����뿪�¼�
	Ptr[i].onmouseout = function Out() 
	{
		moveTR = null;
		this.className = moveClass;
	}
}
document.getElementById('baidutxt').focus();
