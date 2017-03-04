$(function() {
	//切换层
	$('#nav li').on('click', function() {
		$('#nav ul li').removeClass('active-nav')
		$(this).addClass('active-nav');
		mui('.box').pullRefresh().refresh(true);
		$('.mui-table-view').html("");
		mui('.box').pullRefresh().scrollTo(0, 0, 200);
		mui('.box').pullRefresh().pulldownLoading();
	});
	var filter={
		type:0,//层选项
		word:''//关键字
	}
	function metroRedux() {}
	metroRedux.prototype = {
		scroll: function(callback1, callback2) {
			var that = this;
			mui.init({
				pullRefresh: {
					container: '.box',
					down: {
						height: 50, //可选,默认50.触发下拉刷新拖动距离,
						auto: true, //可选,默认false.true是自动下拉刷新一次
						contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
						contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
						contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
						callback: pulldownRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					},
					up: {
						height: 50, //可选.默认50.触发上拉加载拖动距离
						auto: false, //可选,默认false.true是自动上拉加载一次
						contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
						contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
						callback: pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					}
				}
			});
			/**
			 * 下拉刷新具体业务实现
			 */
			function pulldownRefresh() {
				
				callback1();
			}
			/**
			 * 上拉加载具体业务实现
			 */
			function pullupRefresh() {
				
				callback2();
			}
		}
	}
	metrofunc();
	var metro=null;
	function metrofunc(){
		metro = new metroRedux();
	metro.scroll(function() {
		var html = '<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>已解决</span><span class="reward color-7f">悬赏<span class="score">50</span>分</span></div></div><div class="report">举报</div></div><p class="color-7f">这是问题描述，点击进入问题详情页</p><div class="bottom-box clearfix"><div>2017年03月02日</div><div>建设工程经济</div><div class="color-7f">10条回答</div></div></div>';
		$('.mui-table-view').html(html);
		//注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		mui('.box').pullRefresh().endPulldownToRefresh(true);
	}, function() {
		$('.mui-table-view').append('<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>已解决</span><span class="reward color-7f">悬赏<span class="score">20</span>分</span></div></div><div class="report">举报</div></div><p class="color-7f">这是问题描述，点击进入问题详情页</p><div class="bottom-box clearfix"><div>2017年03月02日</div><div>建设工程经济</div><div class="color-7f">10条回答</div></div></div>');
		//注意：
		//1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
		//2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		mui('.box').pullRefresh().endPullupToRefresh(false);
		
	});
	}
	

});
