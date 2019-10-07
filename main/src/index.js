//准备用来写轮播图

// js写法
/*function init(){
	// 设置计数器

	//设定计时器
	setInterval("changeImg()", 5000);
}

function changeImg(){
	count++;

	//document.getElementById("index_img").src = "../img/background"+ count +".jpg";
	$("#index_img").attr("src", "../img/background" + count + ".jpg");
	if(count == 4){
		count = -1;	
	}
}*/


// jq写法
var count = 0;
$(function(){
	setInterval("changeImg()", 5000);	
});
function changeImg(){

	count++;
	$("#index_img").attr("src", "../img/background" + count + ".jpg");  
	if(count == 4){
		count = -1;	
	}
}

