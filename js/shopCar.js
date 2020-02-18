$(function() {
    //全选 全不选功能
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        //背景颜色
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });

    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        // 背景颜色
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    //增减商品模块
    //增加
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        $(this).siblings(".itxt").val(n);
        //小计部分
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1); //单价
        var price = (p * n).toFixed(2); //保留两位小数
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    });
    //减少
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        //小计部分
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1); //单价
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    });
    //用户输入数量改变
    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1); //单价
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    })

    //总计
    getSum();

    function getSum() {
        var money = 0;
        var count = 0;
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);

        // 总额
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    //删除商品
    $(".p-action a").click(function() {
            $(this).parents(".cart-item").remove();
            getSum();
        })
        //删除选中商品
    $(".remove-batch").click(function() {
            $(".j-checkbox:checked").parents(".cart-item").remove();
            getSum();
        })
        //清空购物车
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })

    //选中背景颜色改变


})