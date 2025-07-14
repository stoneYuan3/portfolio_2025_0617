
$(document).ready(function(){

	// swiper for PC
	///////////
	///////////
	var swiper_autoshowImg = new Swiper(".index .swiper_autoshowImg", {
		direction: 'horizontal',
		slidesPerView: 'auto',
		allowTouchMove:true,
		loop: true,
		effect: 'creative',
		speed:800,
		creativeEffect: {
			prev: {
				shadow:true,
				translate: ['-20%', 0, -1],
			},
			next: {
				translate: ['100%',0, 0],
			},
		},
		hashNavigation: {
			watchState: true,
		},
		pagination: {
			el: ".autoshow_content .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".autoshow_buttons .swiper-button-next",
			prevEl: ".autoshow_buttons .swiper-button-prev",
		},
		breakpoints: {
			903:{
				direction: 'vertical',
				creativeEffect: {
					prev: {
						shadow:true,
						translate: [0, '-20%', -1],
					},
					next: {
						translate: [0, '100%', 0],
					},
				},
			}
		},
		//在firefox瀏覽器中激活該動畫時頁面會自動跳回頁首，加入hashNavigation: false後解決
		//https://support.mozilla.org/en-US/questions/1132023#answer-899726
		//https://swiperjs.com/swiper-api#hash-navigation
		hashNavigation: false
	});
	//實現 shanghai autoshow section 之文字動畫
	swiper_autoshowImg.on('slideChange',function(){
		var index_currentSlide = swiper_autoshowImg.realIndex;
		$('.index .autoshow_content .swiper_autoshowTitle .autoshow_text').addClass('none');
		$('.index .autoshow_content .swiper_autoshowTitle .autoshow_text.s'+index_currentSlide).removeClass('none');
	})

	var swiper_thumbnail = new Swiper(".index .swiper_thumbnail", {
		allowTouchMove:true,
		watchSlidesProgress: true,
		slidesPerView: 'auto',
		slideToClickedSlide: true,
		breakpoints: {
			903:{
				allowTouchMove:false,
				slideToClickedSlide: false,
			}
		}
	  });
	var swiper_banner = new Swiper(".index .swiper_banner", {
		loop: true,
		navigation: {
			nextEl: ".arrowButtons_mobile.swiper-button-next",
			prevEl: ".arrowButtons_mobile.swiper-button-prev",
		},
		thumbs: {
			swiper: swiper_thumbnail,
		},
		breakpoints: {
			903:{
				navigation: {
					nextEl: ".testDrive_pc .swiper-button-next",
					prevEl: ".testDrive_pc .swiper-button-prev",
				},
			}
		},
	});
	swiper_banner.on('breakpoint', () => {
		console.log('breakpoint');
		swiper_banner.navigation.destroy();
		swiper_banner.navigation.init();
	})

	// 插入動態效果
	/////////
	/////////
	$('.index .factoryVisit .wrapLeft .wrapper img').hover(
		function(){
		  pauseImgAnimation('.wrapLeft .wrapper', $(this));
		},
		function(){
		  restartImgAnimation('.wrapLeft .wrapper', $(this));
		}
	  );
	  $('.index .factoryVisit .wrapRight .wrapper img').hover(
		function(){
		  pauseImgAnimation('.wrapRight .wrapper', $(this));
		},
		function(){
		  restartImgAnimation('.wrapRight .wrapper', $(this));
		}
	  );
	  $('.index .factoryVisit .wrapper img').on('click', function(){
		var imgsrc = $(this).attr('src');
		var imgName = $(this).attr('name');
		var imgsrc_new = 'images/original/'+imgName+'-original.png';
		$('.imgFull img').attr('src',imgsrc_new);
		$('.imgFull').removeClass('none');
	  });
	  $('.imgFull').on('click', function(){
		if(! $('.imgFull').hasClass('none')){
			imgFullZoomOut();
		}
	  });
	  $('.imgFull').on('mousewheel', function(){
		if(! $('.imgFull').hasClass('none')){
			imgFullZoomOut();
		}
	  });
});

// 重複利用的功能
///////////
///////////
const imgFullZoomOut = () => {
	$('.imgFull').addClass('none');
}
const pauseImgAnimation = (targetColumn, targetImage) => {
	$('.index .factoryVisit '+targetColumn).addClass('paused');
	$(targetImage).addClass('hovered');
}
const restartImgAnimation = (targetColumn, targetImage) => {
	$('.index .factoryVisit '+targetColumn).removeClass('paused');
	$(targetImage).removeClass('hovered');
}

/////////////////////////////////////

