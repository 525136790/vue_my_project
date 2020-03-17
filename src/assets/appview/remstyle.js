// remstyle.js;
$(function(){
	 function setRem(){
        var clientWidth=$(window).width();//实时获取当前的窗口宽度
        var nowRem=(clientWidth*100/420);
        $("html").css("font-size",parseInt(nowRem)+"px");
    };
    setRem();

    var timer;
    $(window).bind("resize",function(){
        clearTimeout(timer)
        timer=setTimeout(function(){
            setRem();
        }, 100)
    })
});