var complexFood = [
  {'title': 'Langostino Lobster Burrito','foodPic' : 'lobster.jpeg','dollars' : '$11.50','index': 'pesc', 'description': 'Langostino Lobster drizzled with warm garlic herb butter, fresh guacamole, citrus rice, black beans, salsa fresca, romaine lettuce and chipotle white sauce wrapped in a flour tortilla. Served with tortilla chips or fresh greens drizzled with lemon agave vinaigrette.'},
  {'title': 'Island Chicken Bowl','foodPic' : 'chicken.jpeg','dollars': '$6.99','index': 'noresc', 'description': 'Oven-Baked rice, topped with grilled chicken breast & roasted veggies'},
  {'title': 'Falafel Pita Meal','foodPic' : 'falafel.jpeg','dollars' : '$6.99','index': 'vegan', 'description' : 'A falafel Pita sandwich, creamy Tahini sauce & one side dish'},
  {'title': 'Tofu Pad Thai','foodPic' : 'tofu.jpeg','dollars' : '$7.75','index': 'vegan', 'description' : 'Rice Noodles with Tofu, Eggs, Green Onions, Bean Sprouts & Crushed Peanuts'},
  {'title': 'Panda Bowl with Chow Mein and Honey Walnut Shrimp','foodPic' : 'honey.jpeg','dollars' : '$5.80','index': 'nut', 'description' : 'Stir Fried Noodles with Large tempura-battered shrimp, wok-tossed in a honey sauce and topped with glazed walnuts.'},
  {'title': 'Greek Salad','foodPic' : 'salad.jpeg','dollars' : '$6.29','index': 'veg', 'description' : 'Lettuce, tomatoes, onions, cucumbers, olives, Feta, Garbanzo beans'},
  {'title': 'Fried Rice','foodPic' : 'rice.jpeg','dollars' : '$3.29','index': 'egg', 'description' : 'Prepared steamed white rice with soy sauce, eggs, peas, carrots and green onions.'},
  {'title': 'Quesadilla with grilled Chicken','foodPic' : 'quesedilla.jpeg','dollars' : '$10.29','index': 'ten', 'description' : 'Toasted flour tortilla with a melted blend of cheeses and grilled all natural chicken. Served with our handmade guacamole, salsa fresca, sour cream and a side of tortilla chips.'},
  {'title': 'Bean and Cheese Burrito','foodPic' : 'bean.jpeg','dollars' : '$15.30','index': 'veg1', 'description' : '"No-fried" pinto beans™ with a blend of cheeses and mild salsa. Wrapped in a toasted flour tortilla and served with a side of tortilla chips.'}

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
  $("#pesc").hide();
  $("#noresc").hide();
  $("#nut").hide();
  $("#ten").hide();
}
if (localStorage.getItem('q1') == 'Pescatarian'){
  $("#noresc").hide();
  $("#ten").hide();
}
if (localStorage.getItem('q1') == 'Vegan'){
  $("#pesc").hide();
  $("#noresc").hide();
  $("#nut").hide();
  $("#veg").hide();
  $("#veg1").hide();
  $("#ten").hide();
}
if (localStorage.getItem('q2') == 'Nut Allergy'){
  $("#nut").hide();
}
if (localStorage.getItem('q2') == 'Dairy Allergy'){
  $("#noresc").hide();
  $("#veg").hide();
  $("#veg1").hide();
  $("#ten").hide();
}
if (localStorage.getItem('q2') == 'Egg Allergy'){
  $("#egg").hide();
}
if (localStorage.getItem('q3') == '$10-$15'){
  $("#veg1").hide();
}
if (localStorage.getItem('q2') == '$5-$10'){
  $("#ten").hide();
  $("#veg1").hide();
  $("#pesc").hide();
}
