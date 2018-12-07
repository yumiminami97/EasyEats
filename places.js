
function myPlaces() {
 var input = document.getElementById('myInput').value;
 if (input == 'santorini' || input=='Santorini'){
   $("#santorini").show();
   $("#panda").hide();
   $("#lemongrass").hide();
   $("#rubios").hide();
 }
 if (input == 'panda' || input=='Panda'){
   $("#panda").show();
   $("#santorini").hide();
   $("#lemongrass").hide();
   $("#rubios").hide();
 }
 if (input == 'lemongrass' || input == 'Lemongrass'){
   $("#lemongrass").show();
   $("#santorini").hide();
   $("#panda").hide();
   $("#rubios").hide();
 }

 if (input == 'rubios' || input == 'Rubios'){
   $("#rubios").show();
   $("#santorini").hide();
   $("#panda").hide();
   $("#lemongrass").hide();
 }
}
