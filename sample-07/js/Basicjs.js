//here we are learning how to set an value
$(function(){
   $(".btn1").click(function(){
       //this function will be performrd 
      $("h1").text("I am learning js !");  
       //we will get the text
   }); 
});


$(function(){
   $(".btn2").click(function(){
      $("h1").html("<i>hii i am getting good in js !</i>");  
       //here we will get the html
   }); 
});

$(function(){
   $(".btn3").click(function(){
     $("input#inputy").val("Paris!");  
       //here we will get the value
   }); 
});

$(function(){
   $(".btn4").click(function(){
      $("a").attr("href","https://yahoo.com");  
       //here we will get the attribute
   }); 
});
//here we will see another way 
//$(function(){
//   $(".btn4").click(function(){
//      alert("Value is: " + $("a").attr("href"));  
//       //here we will get the attribute
//   }); 
//});