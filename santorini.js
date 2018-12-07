var complexFood = [
  {'title': 'Falafel Pita Meal','foodPic' : 'falafel.jpeg','dollars' : '$6.99','index': 'vegan', 'description' : 'A falafel Pita sandwich, creamy Tahini sauce & one side dish', 'link': 'santorinimeal1nutrition.html'},
  {'title': 'Greek Salad','foodPic' : 'salad.jpeg','dollars' : '$6.29','index': 'veg', 'description' : 'Lettuce, tomatoes, onions, cucumbers, olives, Feta, Garbanzo beans', 'link': 'santorinimeal2nutrition.html'},
  {'title': 'Island Gyro Bowl','foodPic' : 'chicken.jpeg','dollars': '$6.99','index': 'noresc', 'description': 'Oven-Baked rice, topped with grilled chicken breast & roasted veggies', 'link': 'santorinimeal3nutrition.html'},

]
var source = $("#entry-template").html();
var template = Handlebars.compile(source);

var parentDiv = $("#templatedProjects");

for (var i=0; i< complexFood.length;i++){
  var curData = complexFood[i];
  var curHtml = template(curData);
  parentDiv.append(curHtml);
}
if (localStorage.getItem('q1') == 'Vegetarian'){
  $(".pesc").hide();
  $(".norec").hide();
}
