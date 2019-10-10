/*
 * 用来确认表单的提交信息
 *
 */
/*function check(){

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
}*/

// 表单校验用validate重构
$(function(){


    $("#loginFrom").validate({

        rules: {
            login_username:{
                required:true,
                minlength: 6,
                maxlength: 12
            },		

        },
        messages: {
            login_username:{
                required: "密码必填",
                minlength: "长度不够噢",
                maxlength: "太长了噢" 
            },		

        }
    });
});
