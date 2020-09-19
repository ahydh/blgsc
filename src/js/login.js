$("#btn").click(function(){
	var uname = $('#uname').val();
	var upwd = $('#upwd').val();
	
	var cookie_str = $.cookie('zhsj') ? $.cookie('zhsj') : '';
	var cookie_obj = $toObj(cookie_str);
	if(uname in cookie_obj){
	    if(upwd === cookie_obj[uname]){
	        alert('登录成功');
	        location.href = '../index.html';
	        return;
	    }else{
	        alert('密码错误！');
	        return;
	    }
	    
	}else{
	    alert('用户名不存在！');
	}
})


function $toObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}

$("#btn2").click(function(){
	location.href="../pages/enorl.html"
})