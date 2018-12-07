var complexFood = [
  {'title': 'Langostino Lobster Burrito','foodPic' : 'lobster.jpeg','dollars' : '$11.50','index': 'pesc', 'description': 'Langostino Lobster drizzled with warm garlic herb butter, fresh guacamole, citrus rice, black beans, salsa fresca, romaine lettuce and chipotle white sauce wrapped in a flour tortilla. Served with tortilla chips or fresh greens drizzled with lemon agave vinaigrette.'},
  {'title': 'Island Chicken Bowl','foodPic' : 'chicken.jpeg','dollars': '$6.99','index': 'noresc', 'description': 'Oven-Baked rice, topped with grilled chicken breast & roasted veggies'},
  {'title': 'Falafel Pita Meal','foodPic' : 'falafel.jpeg','dollars' : '$6.99','index': 'veg', 'description' : 'A falafel Pita sandwich, creamy Tahini sauce & one side dish'}
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
