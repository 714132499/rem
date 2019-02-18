(function(){
    //设置页面rem基准
    var num = 750/window.devicePixelRatio;
    var fontSize = document.documentElement.clientWidth/10;
    document.getElementsByTagName('html')[0].style.fontSize = fontSize+'px';
})();