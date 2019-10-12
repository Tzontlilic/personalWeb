$(function(){
    
    $("#registForm").validate(){
        
        rules:{
           
            // 注册用户名 
            regist_username:{
           
                required:true, // 必填
                maxlength: 10, // 最长十个字符
                minlength:4    // 最短四个字符
            },

            // 注册密码
            regist_password:{
            
                required:true, // 必填
                maxlength:18,   
                minlength:8
            },

            // 重复密码
            re_regist_password:{
            
                equalTo:"#regist_password"
            }


        },
        messages:{

            // 注册用户名 
            regist_username:{
            
                required:"用户名必须填写", // 必填
                maxlength: "名字太长了", // 最长十个字符
                minlength: "名字太短了"   // 最短四个字符
            },

            // 注册密码
            regist_password:{
            
                required:"放心吧我不会看你的", // 必填
                maxlength:"密码这么长你记得住？",   
                minlength:"密码短小"
            },

            // 重复密码
            re_regist_password:{
            
                equalTo:"这么快就忘记了？"
            }
        
        }
    }
});
