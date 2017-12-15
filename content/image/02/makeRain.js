/*********************************************/
/**		2013 06 13 created by traud	**/
/**											**/
/**	출처표기 필수. 수정시 수정부분 표시	**/
/**											**/
/*********************************************/

/* add rain effect to block element */
function makeRain($box, $rain, rainOptions){
		
	if(!$box || $box.length<=0){
		alert('비를 내릴 곳이 잘못 지정되었습니다.');
		return false;
	}if(!$rain || $rain.length<=0){
		alert('빗방울이 잘못 지정되었습니다.');
		return false;
	}

	//default value
	if(!rainOptions.angle){
		rainOptions.angle=270;
	}if(!rainOptions.speed){
		rainOptions.speed=1200;
	}if(!rainOptions.minRain){
		rainOptions.minRain=3;
	}if(!rainOptions.maxRain){
		rainOptions.maxRain=rainOptions.minRain+3;
	}if(!rainOptions.rainInterval){
		rainOptions.rainInterval=300;
	}

	$rain.hide();
	$box.css({'position':'relative', 'overflow':'hidden'});
	$rain.css({'position':'absolute'});

	var timing=setInterval(function(){
		var new_rain_count=Math.floor(Math.random()*rainOptions.minRain+(rainOptions.maxRain-rainOptions.minRain));	//한번에 최소 4, 최대 3개 빗줄기 생성
		//console.log('new_rain_count='+new_rain_count);
		for(var i=0; i< new_rain_count; i++){
			rainEffect($rain, rainOptions);
		}
	}, rainOptions.rainInterval);
}

function rainEffect($rain, rainOptions){
	var $box=$rain.parent();
	var $new_rain=$rain.clone();
	
	var start_y=-$rain.height()-Math.floor(Math.random()*$rain.height()*3);
	var v_y=$box.height()-start_y;
	
	var v_x=v_y/Math.tan(Math.PI/180*rainOptions.angle);
	var start_x=Math.floor(Math.random()*($box.width()+v_x));
	
	
	//console.log('new rain: start('+start_x+', '+start_y+')  velocity=('+v_x+', '+v_y+')');
	$new_rain.css({'left': start_x+'px', 'top': start_y+'px'}).appendTo($box).show().animate({
		left:'-='+v_x,
		top: '+='+v_y
	}, rainOptions.speed, function(){
		$new_rain.remove();
		$new_rain=null;
	});
}