function check(){
	var username = document.getElementById("regist_username").value;
	var password = document.getElementById("regist_password").value;
	var re_password = document.getElementById("re_regist_password").value;

	if(username == "" || password == "" || re_password == ""){
	
		alert("信息不能为空");
		return false;
	}
	else{
		if(password != re_password){
			alert("两次密码输入不一致");	
			return false;
		}	
	}
	alert("注册成功");
}
