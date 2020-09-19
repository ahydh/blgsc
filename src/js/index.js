window.onload=function(){
	new Index()
}

function Index(){
	this.img=$(".rimg")
	this.spmz=$(".spmz")
	this.addData()
}

Index.prototype.addData = function(){
	$.get("../dist/json/index.json",(data)=>{
		
		// data = JSON.parse(data);
		data.forEach((value,i)=>{
			this.img[i].src=value.src
			this.spmz[i].innerHTML = value.spmz;
			$(".spsj")[i].innerHTML = value.spsj;
			$(".spjg")[i].innerHTML = value.spyj;
			$(".buy-m")[i].innerHTML = value.spxj;
			$(".yhq")[i].innerHTML = value.yhq;
		})
	})
	
	
	$.get("../dist/json/index2.json",(data)=>{
		data.forEach((value,i)=>{
			$(".rimg2")[i].src=value.src;
			$(".rimg2")[i].parentNode.href="pages/xqy.html?id=s"+i;
			$(".spmz2")[i].innerHTML = value.spmz;
			$(".spxj2")[i].innerHTML = value.spxj;
			$(".spyj2")[i].innerHTML = value.spyj;
			$(".yhq2")[i].innerHTML = value.yhq;
		})
		
	})
	
}


