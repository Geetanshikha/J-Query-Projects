$(function(){
   $(".btn1").click(function(){
       //this function will be performrd 
      alert("Text is: " + $("h1").text());  
       //we will get the text
   }); 
});


$(function(){
   $(".btn2").click(function(){
      alert("HTML is: " + $("h1").html());  
       //here we will get the html
   }); 
});

$(function(){
   $(".btn3").click(function(){
      alert("Value is: " + $("input#inputy").val());  
       //here we will get the value
   }); 
});

$(function(){
   $(".btn4").click(function(){
      alert("Value is: " + $("a").attr("href"));  
       //here we will get the attribute
   }); 
});