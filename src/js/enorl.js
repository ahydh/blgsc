code_draw();
// 点击后刷新验证码
$("#canvas").on('click', function() {
	code_draw();
})


$("#btn").click(function(){
	var uname = $('#uname').val();
	var upwd = $('#upwd').val();
	var qupwd = $('#qupwd').val();
	var cookie_str = $.cookie('zhsj') ? $.cookie('zhsj') : '';
	var cookie_obj = $toObj(cookie_str);
	
	
	var val = $(".input-val").val().toLowerCase();
	// 获取生成验证码值
	var num = $('#canvas').attr('data-code');
	if (val == '') {
		alert('请输入验证码！');
	} else if (val == num) {
		// var re_user = /^[a-zA-Z0-9_-]{4,16}$/;
		// if(!re_user.test(uname)){
		//     alert('用户名不符合规则！（4-16英文数字下划线-）');
		//     return;
		// }
		// var re_pass = /^[a-zA-Z0-9_-]{4,16}$/;
		// if(!re_pass.test(upwd)){
		//     alert('密码不符合规则！（4-12英文数字下划线-）');
		//     return;
		// }
		// alert('提交成功！');
		if(uname in cookie_obj){
			alert('用户已存在！');
			return;
		}
		if(qupwd!=upwd){
			alert('两次密码输入不一致！');
			return;
		}
		$(".input-val").val('');
		cookie_obj[uname] = upwd;
		$.cookie('zhsj',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
		alert('注册成功！');
				
	} else {
		alert('验证码错误！请重新输入！');
		$(".input-val").val('');
	}
	
	
})




function $toObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}