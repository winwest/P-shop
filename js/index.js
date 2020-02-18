window.addEventListener('load', function() {
    //获取元素
    var arrowLeft = document.querySelector('.arrow-left');
    var arrowRight = document.querySelector('.arrow-right');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //鼠标经过 左右按钮 定时器
    focus.addEventListener('mouseenter', function() {
        arrowLeft.style.display = 'block';
        arrowRight.style.display = 'block';
        clearInterval(timer); //清除定时器
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
            timer = setInterval(function() {
                //手动调用点击事件
                arrowRight.click();
            }, 2000)
        })
        //动态获取小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            //排他思想
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //點擊小圓圈移動圖片 ul的移动距离=小圆圈的索引号 乘以 图片的宽度 注意是负值
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    //第一个li设为current
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //点击右侧按钮，图片滚动
    var num = 0;
    var circle = 0;
    //节流阀
    var flag = true;
    arrowRight.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true; //打开节流阀
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    });

    //左侧按钮
    arrowLeft.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            //换成三元表达式
            circle = circle < 0 ? ol.children.length - 1 : circle;
            //封装成函数
            circleChange();
        }
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //自动播放功能
    var timer = setInterval(function() {
        //手动调用点击事件
        arrowRight.click();
    }, 2000)
})