$(function(){
	$('#nav li').on('click',function(){
		$('#nav ul li').removeClass('active-nav')
		$(this).addClass('active-nav');
		var index=$(this).index();
		$('.slider').css({"-webkit-transform":"translateX(-"+25*index+"%)"});
		if($('.box').eq(index).scrollTop()>50){
			$('.suspend .gotop').show();
		}else{
			$('.suspend .gotop').hide();
		}
	});
	
	$('body').goTop({percent:25,isTab:true});
});
