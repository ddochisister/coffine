$(function(){
    $("a").click(function(e){
        e.preventDefault()
    })


    //메뉴영역
    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown()
        $(".head_b").stop().animate({height:"400px"},500)
    }) //mouseenter
    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp()
        $(".head_b").stop().animate({height:"103px"},500)
    }) //mouseleave



    //main_visual 영역
    $(".move").slick({
        autoplay:true,
        autoplaySpeed: 3000,
        dots:true,
        arrows:true,
        pauseOnHover:false,
    })



    //section04 영역
    $(".left_move").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false,
        slidesToScroll:2,
    })



    //section05 영역
    $(".section05_inner li").click(function(e){
        e.preventDefault()
        $(".section05_inner li").toggleClass("on")
    })



    //팝업
    $(".popup").slideDown()

    $(".popup_inner button").click(function(){
        $(".popup").slideUp()
    })

}) //jquery