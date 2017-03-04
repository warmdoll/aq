$(function(){	
	$('.more').on('click',function(){
		$('.more-hide-dive').toggle();
		$('.shade').toggle();
	})
	$('.shade').on('touchstart',function(){
		$('.shade').toggle();
		$('.more-hide-dive').toggle();
	});
	$('.search-div div').on('click',function(){
		$('.search-box').css({"-webkit-transform":"translateX(0)"});
		$('.main-box').css({"-webkit-transform":"translateX(-100%)"});
		$('.search-box .search-div input').focus();
	})
	$('.search-box .back').on('click',function(){
		$('.search-box').css({"-webkit-transform":"translateX(100%)"});
		$('.main-box').css({"-webkit-transform":"translateX(0)"});
	})
	$('.search-box .search-div input').focus(function(){		
		$('.search-box .search-div i').css({'display':'none'})
		$(this).attr('placeholder','');
	})
	$('.search-box .search-div input').on('blur',function(){
		if(!$(this).val()){
			$('.search-box .search-div i').css({'display':'block'})
			$(this).attr('placeholder','搜索你关注的问题');
		}
	})
});