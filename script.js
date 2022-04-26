$(".prediction-submit").click(function(){
    let name = $(".name").val(); 
   let games= $(".games").val();  
   let Played = $(".Played").val();  
   let answer = (2050-2022) + Played; 
    
    $(".fortune-display").append("<p>" + name + " your favorite games are " + games + " and you will play them " + answer + " times by 2050" + "</p>");

});