var complexFood = [
  {'title': 'Langostino Lobster Burrito','foodPic' : 'lobster.jpeg','dollars' : '$11.50','index': 'pesc', 'description': 'Langostino Lobster drizzled with warm garlic herb butter, fresh guacamole, citrus rice, black beans, salsa fresca, romaine lettuce and chipotle white sauce wrapped in a flour tortilla. Served with tortilla chips or fresh greens drizzled with lemon agave vinaigrette.', 'link': 'rubiosmeal1nutrition.html'},
  {'title': 'Quesadilla','foodPic' : 'quesedilla.jpeg','dollars': '$4.79','index': 'noresc', 'description': 'Toasted flour tortilla with a melted blend of cheeses. Served with our handmade guacamole, salsa fresca, sour cream and a side of tortilla chips. Your choice of melted cheese, grilled all natural chicken, pan-seared shrimp and grilled veggies', 'link': 'rubiosmeal2nutrition.html'},
  {'title': 'Bean and Cheese Burrito','foodPic' : 'bean.jpeg','dollars': '$4.79','index': 'noresc', 'description': 'Bean and Cheese Burrito combines our signature "no-fried" pinto beans with a blend of cheeses and mild salsa', 'link': 'rubiosmeal3nutrition.html'},

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
