

$(document).ready(function(){

    $('.index #menuOpen').on('click',function(){
        // $('.index .menuOptions').removeClass('hide');
        $('.index .menuOptions').removeClass('menuOffAnim');
        $('.index .menuOptions .menuColumn').removeClass('menuOffAnim');
        $('.index .menuOptions .menuColumn').addClass('menuOnAnim');
        $('.index .menuOptions').addClass('menuOnAnim');
    })
    $('.index #menuClose').on('click',function(){
        $('.index .menuOptions').removeClass('menuOnAnim');
        $('.index .menuOptions .menuColumn').removeClass('menuOnAnim');
        $('.index .menuOptions .menuColumn').addClass('menuOffAnim');
        $('.index .menuOptions').addClass('menuOffAnim');

        // $('.index .menuOptions').delay(600).addClass('hide');

    })

    const menuButton = $('.index .nav .left .menu');
    menuButton.on('click',function(){
        console.log('menuClick')
    })
    const menuCol1 = $('.index .menuOptions .col1 li');
    const menuCol2 = $('.index .menuOptions .col2 li');

    var type;
    menuCol1.hover(function(){
        menuCol1.removeClass('selected');
        $(this).addClass('selected')
        if($(this).children('#vehicles').length>0){
            console.log('vehi');
            $('.index .col2 .vehicleModel').removeClass('hide');
            $('.index .col2 .exploreJetour').addClass('hide');

            $('.index .col3 .'+type).removeClass('hide');
            $(".index .col2 .vehicleModel li[type='"+type+"']").removeClass('hide');
        }
        else if($(this).children('#exploreJetour').length>0){
            console.log('explore');
            $('.index .col2 .exploreJetour').removeClass('hide');
            $('.index .col2 .vehicleModel').addClass('hide');
            
            $('.index .col3 .menuModel').addClass('hide');
        }
    })
    menuCol2.hover(function(){
        menuCol2.removeClass('selected');

        if($(this).parent().hasClass('vehicleModel')){
            console.log('model');
            type=$(this).attr('type');
            console.log(type);
            if(type){
                $('.index .col3 .menuModel').addClass('hide');
                $('.index .col3 .'+type).removeClass('hide');
            }
        }
        $(this).addClass('selected')
    })

    const swiper_banner = new Swiper('.index .swiper-banner',{
        direction: 'horizontal',
        slidesPerView:'1',
        loop:true,
        effect: 'fade',
        crossFade:true,
        speed:1000,
        autoplay: {
            delay: 3000,
        },
        navigation: {
			nextEl: ".index .banner .bannerNext",
			prevEl: ".index .banner .bannerPrev",
		},
    })
    swiper_banner.on('slideChange',function(){
        // console.log(swiper_banner.realIndex);
        //預先移除之前加入的所有反轉動畫class
        $(".index .banner .imgWrapper").removeClass('rotateReverse');
        $(".index .banner .bannerTitle .titleGroup").removeClass('rotateReverse');   

        $(".index .banner .bannerTitle .titleGroup.s"+swiper_banner.realIndex).removeClass('hide');
	})

    //動畫設置
    //banner標題動畫長度見theme.css titleGroupShowReverse
    const titleAnimationDuration = 650;
    const firstSlideIndex = 0;
    const lastSlideIndex = 2;
    //往前翻頁時使用以下動畫設置
    swiper_banner.on('slideNextTransitionStart',function(){
        //為前一個slide添加反轉動畫
        var indexBefore = swiper_banner.realIndex-1;
        if(swiper_banner.realIndex==0){
            indexBefore = lastSlideIndex;
        }
        rotateReverseAnim(indexBefore);

    })
    //往後翻頁時使用以下動畫設置
    swiper_banner.on('slidePrevTransitionStart',function(){
        //為後一個slide添加反轉動畫
        var indexBefore = swiper_banner.realIndex+1;
        if(swiper_banner.realIndex==lastSlideIndex){
            indexBefore = firstSlideIndex;
        }
        rotateReverseAnim(indexBefore);
    })

    function showHideTitleGroup(){
        $(".index .banner .bannerTitle .titleGroup").addClass('hide');
        $(".index .banner .bannerTitle .titleGroup.s"+swiper_banner.realIndex).removeClass('hide');
    }
    function rotateReverseAnim(indexBefore){
        $(".index .banner .imgWrapper.s"+indexBefore).addClass('rotateReverse');
        $(".index .banner .bannerTitle .titleGroup.s"+indexBefore).addClass('rotateReverse');
        //等待動畫完成後隱藏其他banner標題
        window.setTimeout( showHideTitleGroup, titleAnimationDuration ); 
    }

    const swiper_model_thumb = new Swiper('.index .swiper-model-thumb',{
        direction: 'horizontal',
        slidesPerView:'auto',
        loop:true,
        // spaceBetween:50,
    })
	const swiper_model = new Swiper('.index .swiper-model',{
        direction: 'horizontal',
		slidesPerView: 1,
        loop:true,
        thumbs:{
            swiper:swiper_model_thumb,
        },
		navigation: {
			nextEl: ".index .swiper-model-thumb-wrapper .swiper-next",
			prevEl: ".index .swiper-model-thumb-wrapper .swiper-prev",
		},
    });
    swiper_model.on('afterInit',function(){
        $('.index .model-show .modelNumber .numberCluster').addClass('s'+swiper_model.realIndex);
    })
    swiper_model.on('slideNextTransitionStart', function () {
		swiper_model_thumb.slideNext(200);
        // $('.index .model-show .modelNumber .numberCluster.length').addClass('s'+swiper_model.realIndex);
	});
    swiper_model.on('slidePrevTransitionStart', function () {
		swiper_model_thumb.slidePrev(200);
	});
    // 更新數字
    swiper_model.on('slideChange',function(){
        $(".index .model-show .modelNumber .numberCluster div[label='numBox']").removeClass();
        $(".index .model-show .modelNumber .numberCluster div[label='numBox']").addClass('s'+swiper_model.realIndex);

        // 重新加入元素以重啟動畫
        restartNumberAnim();

        var cloneTitle = $(".index .model-show .modelTitle div").clone(true);
        $(".index .model-show .modelTitle div").before(cloneTitle);
        $(".index .model-show .modelTitle div:last").remove();
	})

    var animationPlayed=false;
    $(window).scroll(function() {
        var hT = $('.index .model-show').offset().top,
            hH = $('.index .model-show').outerHeight()-200,
            wH = $(window).height(),
            wS = $(this).scrollTop();
        //  console.log((hT-wH) , wS);
        if (wS > (hT+hH-wH)){
            if(!animationPlayed){
                restartNumberAnim();
                animationPlayed=true;
            }
        }
     });

     var videoPlayed=false;
     $(window).scroll(function() {
        var hT = $('.index .video').offset().top,
            hH = $('.index .model-show').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        //  console.log((hT-wH) , wS);
        if (wS > (hT+hH-wH)){
            if(!videoPlayed){
                window.setTimeout(startVideo,1000);
            }
        }
     });

     function startVideo(){
        $('.index .video img').addClass('disappearAnim');
        $('.index .video video').removeClass('hide');
        window.setTimeout(function(){
            $('.index .video img').addClass('hide');
            $('.index .video video').trigger('play');
        }, 500);
        videoPlayed=true;
     }

    //ref: https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
    $(document).scroll(function () {
        var nav = $(".index .nav");
        nav.toggleClass('navFixed', $(this).scrollTop() > nav.height());
    });

    const swiper_news = new Swiper('.index .news .swiper-news',{
        direction: 'horizontal',
        loop:false,
        slidesPerView:'auto',
        navigation: {
			nextEl: ".index .newsOptions .swiper-next",
			prevEl: ".index .newsOptions .swiper-prev",
		},
    })

    $('.index .news .swiper-news .swiper-slide').hover(
        function(){
            $(this).find('.hoverLink').removeClass('hide');
            $(this).find('.normal').addClass('hide');
            // $('.index .news .swiper-news .swiper-slide .hoverLink').removeClass('hide');
            // $('.index .news .swiper-news .swiper-slide .normal').addClass('hide');
        },
        function(){
            $(this).find('.hoverLink').addClass('hide');
            $(this).find('.normal').removeClass('hide');
            // $('.index .news .swiper-news .swiper-slide .hoverLink').addClass('hide');
            // $('.index .news .swiper-news .swiper-slide .normal').removeClass('hide');
        }
    )
    
    $('.index .swiper-prev, .index .swiper-next').hover(
        function(){
            $(this).find('.selected').removeClass('hide');
            $(this).find('.unselected').removeClass('hide');
            $(this).find('.unselected').addClass('hide');
        },
        function(){
            $(this).find('.unselected').removeClass('hide');
            $(this).find('.selected').removeClass('hide');
            $(this).find('.selected').addClass('hide');
        }
    )

});

function restartNumberAnim(){
    var cloneLen = $(".index .model-show .numberWrapper.length .numberCluster").clone(true);
    $(".index .model-show .numberWrapper.length .numberCluster").before(cloneLen);
    $(".index .model-show .numberWrapper.length .numberCluster:last").remove();

    var cloneWid = $(".index .model-show .numberWrapper.width .numberCluster").clone(true);
    $(".index .model-show .numberWrapper.width .numberCluster").before(cloneWid);
    $(".index .model-show .numberWrapper.width .numberCluster:last").remove();

    var cloneHei = $(".index .model-show .numberWrapper.height .numberCluster").clone(true);
    $(".index .model-show .numberWrapper.height .numberCluster").before(cloneHei);
    $(".index .model-show .numberWrapper.height .numberCluster:last").remove();

}