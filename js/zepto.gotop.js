//移动端--回到顶部
//此插件引用需要引用zepto
//调用方法
//window.onload=function(){
//			$('body').goTop({right:20,bottom:20});
//		}
(function($) {
	var timer = null;
	var isTop=true;
	$.fn.goTop = function(options) {
		var defaults={
			isTab:false,//是否有tab层切换
			percent:100//每个层的百分比*100
		}
		$.extend(defaults,options||{});
		//滚动条滚动
		$('.box').scroll(function(event) {
			var top = $(this).scrollTop();
			if(top > 50) {
				$('.suspend .gotop').show();
			} else {
				$('.suspend .gotop').hide();
			}
			//传过来是true
			if(!isTop){
				clearInterval(timer);
			}
			isTop=false;
			
		})
		$('.suspend .gotop').on('click', function() {
			var index;
			if(defaults.isTab){
				index=$('#nav li.active-nav').index();
				
			}else{
				index=0;
			}
			console.log(index)
			//重复执行
			timer = setInterval(function() {
				//每30ms获取一次距离,计算一次速度,重新给滚动条位置赋值
				var scrolltop = $('.box').eq(index).scrollTop();			
				var speed = Math.floor(-scrolltop / 6);
				//在置顶过程中，这句代码出发scroll事件
				$('.box').eq(index).scrollTop(scrolltop+speed);	
				//每次将false改为true
				isTop=true;
				//置顶后清除计时器
				if(scrolltop == 0) {
					clearInterval(timer);
				}
			}, 30);
		});
	};
})(window.Zepto);