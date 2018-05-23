/**
 * Created by 王争 on 2016/11/23.
 */

$(window).scroll(function(){

    //console.log($(window).scrollTop());

    var top=$(window).scrollTop();

    if(top==0){
        $(".navbar-default").css("background-color","transparent");
    }else if(top<20&&top>0){
        $(".navbar-default").css("background-color","#fff");
        console.log(1);
       $(".navbar-collapse>p>a").css("color","#000!important")
    }
})
