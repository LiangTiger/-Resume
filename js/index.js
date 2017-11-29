$(function () {
    $(window).scroll(function () {
        top1 = $("#aboutMe").offset().top - 52;
        top2 = $("#technology").offset().top - 100;
        top3 = $("#works").offset().top - 100;
        top4 = $("#contact").offset().top - 100;
        var s = $(window).scrollTop()
        s > top1 ? $("#nav-bar").addClass("fixed") : $("#nav-bar").removeClass("fixed")
        if (s > top1 && s < top2) {
            $('.nav>li').eq(0).addClass("active").siblings().removeClass("active")
        } else if (s > top2 && s < top3) {
            $('.nav>li').eq(1).addClass("active").siblings().removeClass("active")
        } else if (s > top3 && s < top4) {
            $('.nav>li').eq(2).addClass("active").siblings().removeClass("active")
        } else if (s > top4) {
            $('.nav>li').eq(3).addClass("active").siblings().removeClass("active")
        } 

    })
    $('.nav>li').bind('click', function () {
        var index = $(this).index();
        console.log(index)
        _top = $(".section").eq(index + 1).offset().top;
        moveTo();
    })

    function moveTo() {
        $("html,body").animate({
            scrollTop: _top
        }, 500)
    }
    creatChart();
    function creatChart() {
        //Get context with jQuery - using jQuery's .get() method.
        var ctx = $("#myChart").get(0).getContext("2d");
       
        //This will get the first returned node in the jQuery collection.
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels : ["HTML", "CSS", "Javascript", "jQuery", "node.js"],
                datasets: [{
                    label: '熟悉程度',
                    data: [75, 75, 71, 70, 60],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.4)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                },
            ]
            },
            options: {
                responsive: true,
                scale: {
                    ticks: {
                      min: 0,
                      max: 100
                    }
                  }
            }
        })
    }
})
