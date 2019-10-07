/*
 * 用来确认表单的提交信息
 *
 */
function check(){

	var username = document.getElementById("login_username").value;
	var password = document.getElementById("login_password").value;
	if(username == "" || password == ""){
		alert("用户名或密码不能为空！");	
		return false;
	}
}


function showTips(){
	if(document.getElementById("login_username").value == ""){
	document.getElementById("login_username_tips").innerHTML = "用户名要填!";
	}
	else{
	document.getElementById("login_username_tips").innerHTML = "";
	}
}
