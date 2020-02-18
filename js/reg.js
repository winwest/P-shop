window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regmes = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var tel = document.querySelector('#tel');
    var mes = document.querySelector('#yanzheng');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel);
    regexp(mes, regmes);
    regexp(pwd, regpwd);

    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = ' <i class="success-icon"></i>输入正确 ';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = ' <i class="error-icon"></i>格式不正确，请重新输入';
            }
        }
    };
    surepwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = ' <i class="success-icon"></i>输入正确 ';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = ' <i class="error-icon"></i>两次密码输入不一致';
        }
    }

}