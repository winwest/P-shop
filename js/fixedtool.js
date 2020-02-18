$(function() {
    var flag = true;
    var toolTop = $(".recom").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    //页面滚动事件
    $(window).scroll(function() {
        toggleTool();

        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }

    });

    $(".fixedtool li").click(function() {
        flag = false;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });

        //导航条背景
        $(this).addClass("current").siblings().removeClass();
    });
})