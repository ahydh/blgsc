var str=decodeURIComponent(window.location.search);
var wid=str.substr(4,1);
var yid=str.substr(4,3);
var tp=document.querySelector("#wytp")
var bt=document.querySelector("#wybt")
var yj=document.querySelector("#wyyj")
var xj=document.querySelector("#wyxj")
var yh=document.querySelector("#wyyh")


$.get("../json/index.json",(data)=>{
		// data = JSON.parse(data);
		data.forEach((value,i)=>{
			if(wid==value.id){
				tp.src="../"+value.src
				bt.innerHTML = value.spmz;
				yj.innerHTML = value.spyj;
				xj.innerHTML = value.spxj;
				yh.innerHTML = "￥"+(value.spyj-value.spxj);
			}
			
		})
	})
	
$.get("../json/index2.json",(data)=>{
		// data = JSON.parse(data);
		data.forEach((value,i)=>{
			if(yid==value.id){
				tp.src="../"+value.src
				bt.innerHTML = value.spmz;
				yj.innerHTML = value.spyj;
				xj.innerHTML = value.spxj;
				yh.innerHTML = "￥"+(value.spyj-value.spxj);
			}
			
		})
	})