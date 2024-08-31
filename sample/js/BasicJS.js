//ohk so here we will be writing our first jquery code !
//this will hide the para !
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

//this will hide the h1 !
$(document).ready(function(){
    $("button.sec").click(function(){
        $("h1").hide();
    });
});

//so if we wnat to go for the particuar class in an element then simply it will be (element.class)
//for an eg : button.sec;

//so now if we want to hide our first para only then we will simply write 
//"p:first " and this will hide the first para :