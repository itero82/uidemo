
$(document).ready(function(){
   
	// 약관 레이어팝업
	$('.pop_btn').click(function(){
		$('#layer_popup_bg').show();
		$('#layer_pop').show();
	});



	// 레이어팝업 닫기
	$('#layer_pop .btn').click(function () {
		$('#layer_popup_bg').hide();
		$('#layer_pop').hide();
	});


});