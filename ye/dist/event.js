$(document).ready(function(){


	$(".item .block img").mouseenter(function(){
		 $(this).next().show();
	});
	$(".block_info").mouseleave(function(){
		$(this).hide();
	});
});
