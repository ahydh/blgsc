window.onload=function(){
	new project();
}

class project{
	constructor() {
	    this.abcEvent();
	}
	abcEvent(){
		$a=$("#abc a");
		$a.each(function(i){
			$a[i].on("click",function(i){
				$a.each(function(i){
					$a=$("#abc a");
					$a[i].border-top="#eee 1px solid";
					$a[i].style.color="#6f6f6f";
				})
				$a[i].border-top="red 1px solid";
				$a[i].style.color="red";
			})
		})
	}
}

<script><script>

