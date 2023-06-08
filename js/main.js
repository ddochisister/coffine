$(function(){
    //메뉴영역
    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown()
        $(".head_b").stop().animate({height:"400px"},500)
    }) //mouseenter
    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp()
        $(".head_b").stop().animate({height:"103px"},500)
    }) //mouseleave



    $(".move").slick({
        autoplay:true,
        autoplaySpeed: 3000,
        dots:true,
        arrows:true,
        pauseOnHover:false,
    })



}) //jquery