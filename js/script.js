$('.app-btn').on({click:function(){
    $('.bar').toggleClass('add');
    $('.mobile-nav').stop().slideToggle(500);
}});


//news
const newsBanner=$('.news-box-wrap .news-item');
let current=0;
let newsInterval;


newsSlide();
function newsSlide(){
    newsInterval=setInterval(function(){
        let prev=newsBanner.eq(current);
        newsMove(prev, 0, '-100%');
        current++;
        if(current==newsBanner.size()) current=0;
        let next=newsBanner.eq(current);
        newsMove(next, '100%', 0);
    },2000);
}
function newsMove(tg, start, end){
    tg.css("top",start).stop().animate({top:end},500);
}

$('.news-box-wrap').hover(function(){
    clearInterval(newsInterval)
},function(){
    newsSlide();
});

//btn
const bottomRadius=$('.btn li');
const line=$('.template-line .title li');
bottomRadius.click(function(){
    bottomRadius.removeClass('on');
    $(this).addClass('on');
    let lines=$(this).index();
    //console.log(lines)
    line.removeClass('on');
    line.eq(lines).addClass('on');
});


//bannerslide
const slideBanner=$('.bannerArea > .area');
const leftBtn=$('.bLeftBtn');
const rightBtn=$('.bRightBtn');
const slideList=$('.bannerArea > .area > li');
const slideWidth=slideList.width();
let setIntervalId;

bannerSlide();
function bannerSlide(){
    //setIntervalId=setInterval(() => {},2000);
    setIntervalId=setInterval(function(){
        slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
            $('.bannerArea > .area > li:first').insertAfter('.bannerArea > .area > li:last');
            slideBanner.css({left:0});
        });
    },2000);
}
//마우스 올리면 슬라이드 멈춤
//마우스 빠져나오면 슬라이드 움직임

leftBtn.hover(function(){
    clearInterval(setIntervalId)
},function(){
    bannerSlide();
});
rightBtn.hover(function(){
    clearInterval(setIntervalId)
},function(){
    bannerSlide();
});

$('.bannerArea').hover(function(){
    clearInterval(setIntervalId)
},function(){
    bannerSlide();
});

//버튼 누르면 해당방향으로 한칸씩 이동

$('.bLeftBtn').click(function(){
    slideBanner.stop().animate({left:-(slideWidth+15)},500, function(){
        $('.bannerArea > .area > li:first').insertAfter('.bannerArea > .area > li:last');
        slideBanner.css({left:0});
    });
});

rightBtn.click(function(){
    $('.bannerArea > .area > li:last').insertBefore('.bannerArea > .area > li:first');
    slideBanner.css({left:-(slideWidth+15)}).stop().animate({left:0},500);
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },

        // when window width is >= 640;px
        720: {
          slidesPerView: 4,
          spaceBetween: 20
        }}
  });
  //메인이미지 슬라이드
  $('.bxslider').bxSlider({mode: 'fade'
});




