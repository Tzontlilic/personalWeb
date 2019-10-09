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

// 写页面加载函数
$(function(){

	var cities = new Array(3);
    cities[0] = new Array("长沙市", "岳阳市", "株洲市");
    cities[1] = new Array("武汉市", "咸宁市", "赤壁市");
    cities[2] = new Array("沈阳市", "大连市", "海城市");
    cities[3] = new Array("广州市", "深圳市", "佛山市");


	// 写省市二级联动	
	
	// 获取下拉框的事件
	$("#province").change(function(){
		// 删除城市下拉框的元素，防止累计
		$("#cities").empty();

		// 获取用户选择的省份
		var value = this.value;
	
		// $.each是对数组等结构进行遍历的函数
		// 第一个参数cities表示要进行遍历的数组
		// function中有两个参数，第一个参数
		// 表示数组的下标，第二个表示
		// 对应的数组值
		// 如果是二维数组，则第二个参数表示下标对应的每一个第二维的数组
		$.each(cities, function(i, n){
			// 打印了每一个数组	
			//alert(i + ":" + n);			
			
			// 判断下标是不是用户选择的省份
			if(i == value){

				// 对省份所有的城市进行遍历获取，方便添加到标签元素中		
				$.each(cities[i], function(j, m){
					// 打印每一个城市	
					// alert(j + ":" + m);
					
					// 创建城市对应的文本结点
					var textNode = document.createTextNode(m);
					// 创建元素结点
					var eleNode = document.createElement("option");
					// 将文本结点添加到元素结点中
					$(eleNode).append(textNode);
					// 将元素结点添加到下拉列表中
					$(eleNode).appendTo($("#cities"));
				});
			}
		});
	});
});
