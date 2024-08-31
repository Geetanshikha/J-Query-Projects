//this is toh we have create dan alert !
//$(function(){
//    $("h1").click(function(){
//        $(".sample").slideToggle(1000 ,function(){
//            alert("Animation Completed !");
//        });
//    });
//});
//so here we have seen how does an call back function happens 

//now we will learn about chaining in jquery 
//so here chaining helps to apply multiple query effects in just one go 

$(function(){
    $("h1").click(function(){
        $(".sample").css('background-color','lightblue').slideUp(2000).slideDown(1500);
    });
});
//so we can chain more than one jquery by just adding j-query after the . !
//like it has happen css. after that slideUp .then slideDown !