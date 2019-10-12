$(function(){
    
    $("#registForm").validate({
    
        rules:{
            regist_username:{
                required:true, 
                maxlength:12,
                minlength:4
            },
            regist_password:{
                required:true, 
                maxlength:15,
                minlength:6
            },
            re_regist_password:{

                equalTo:"#regist_password"
            }
        },
        messages:{
            regist_username:{
                required:"用户名必填", 
                maxlength:"最长不能超过十二个字符",
                minlength:"名字太短了"
            },
            regist_password:{
                required:"放心我不会看你的", 
                maxlength:"密码太长了",
                minlength:"太短了太短了"
            },
            re_regist_password:{

                equalTo:"记不住密码了吗"
            }
        
        }
    });
});
