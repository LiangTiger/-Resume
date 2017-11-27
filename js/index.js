$(function(){
    $(window).scroll(function(){
        top1=$("#aboutMe").offset().top-52;
        top2=$("#demand").offset().top-100;
        top3=$("#experience").offset().top-100;
        top4=$("#technology").offset().top-100;
        top5=$("#works").offset().top-100;
        top6=$("#contact").offset().top-100;
        var s=$(window).scrollTop()
        s>top1?$("#nav-bar").addClass("fixed"):$("#nav-bar").removeClass("fixed")
        if(s>top1&&s<top2){
            $('.nav>li').eq(0).addClass("active").siblings().removeClass("active")
        }else if(s>top2&&s<top3){
            $('.nav>li').eq(1).addClass("active").siblings().removeClass("active")
        }
        else if(s>top3&&s<top4){
            $('.nav>li').eq(2).addClass("active").siblings().removeClass("active")
        }
        else if(s>top4&&s<top5){
            $('.nav>li').eq(3).addClass("active").siblings().removeClass("active")
        }
        else if(s>top5&&s<top6){
            $('.nav>li').eq(4).addClass("active").siblings().removeClass("active")
        }else if(s>top6){
            console.log(s)
            console.log(top6)
            $('.nav>li').eq(5).addClass("active").siblings().removeClass("active")
        }

    })
    $('.nav>li').bind('click',function(){
        var index=$(this).index();
        console.log(index)
        _top=$(".section").eq(index+1).offset().top;
        moveTo();
    })
    function moveTo(){
        $("html,body").animate({
            scrollTop:_top
        },500)
    }
  
})