//to use slide up 
//$(function(){
//    $("h1").click(function(){
//        $(".sample").slideUp(1000);
//    });
//});

//To use slide up and down
//$(function(){
//    $("h1").click(function(){
//        $(".sample").slideToggle(1000);
//    });
//});

//To use animation !here we can take three arguments like increasing the height,weight,opacity,color .
$(function(){
    $("h1").click(function(){
        $(".sample").animate({
            height:'+=100px',
            weight:'+=100px'
        },1000);
    });
});
//
//
//(function(){
//    $("h1").click(function(){
//        $(".sample").slideUp(1000);
//    });
//});
//
//
//(function(){
//    $("h1").click(function(){
//        $(".sample").slideUp(1000);
//    });
//});
//
//
//(function(){
//    $("h1").click(function(){
//        $(".sample").slideUp(1000);
//    });
//});
