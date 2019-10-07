//准备用来写轮播图

var count = -1;
function init(){
	// 设置计数器

	//设定计时器
	setInterval("changeImg()", 10000);
}

function changeImg(){
	count++;
	document.getElementById("index_img").src = "../img/background"+ count +".jpg";
	if(count == 4){
		count = -1;	
	}
	
}
