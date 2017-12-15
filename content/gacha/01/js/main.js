var rouletteOption = {time:10,speed:.035,frame:10}
	var rotateAngle = [22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5],isAnimated=!0;
	
	function rouletteStart() {
		$(".roulette_start").hasClass("on") ? doRoulette() : openLayerPop("popConfirm")
	}

	function retryRoulette(){
		closeLayerPop();
		doRoulette()
	}

	function openLayerPop(n) {
		$("#layer_info").show();
		$("#layer_info .pop").hide();
		$("#layer_info").find("#"+n).show()
	}
	
	function closeLayerPop(){
		$("#layer_info").hide();
	}
	
	function doRoulette() {
		var idx = Math.floor( Math.random()*6 );
		goRoulette(idx);
		return
	}

	function goRoulette(n,t,i) { 
		var u;
		if(isAnimated){ 
			isAnimated=!1;
			u=rotateAngle[n];
			t===undefined && (t=rouletteOption.time);
			i===undefined && (i=rouletteOption.speed);
			var r=0,
			f=u*-1+360*t,
			e=setInterval(
				function(){ 
					r += (f-r)*i;
					$(".roulette_img").rotate(r);
					r>=f-2 && (clearInterval(e),openLayerPop("popResult"),isAnimated=!0)
				},rouletteOption.frame)
		}
	}