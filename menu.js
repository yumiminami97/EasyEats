var complexFood = [
  {'title': 'Langostino Lobster Burrito','foodPic' : 'lobster.jpeg','dollars' : '$11.50','index': 'pesc', 'description': 'Langostino Lobster drizzled with warm garlic herb butter, fresh guacamole, citrus rice, black beans, salsa fresca, romaine lettuce and chipotle white sauce wrapped in a flour tortilla. Served with tortilla chips or fresh greens drizzled with lemon agave vinaigrette.', 'link': 'home1nutrition.html'},
  {'title': 'Gyro Plate','foodPic' : 'chicken.jpeg','dollars': '$6.99','index': 'noresc', 'description': 'Oven-Baked rice, topped with gyros & roasted veggies', 'link': 'home2nutrition.html'},
  {'title': 'Falafel Pita Meal','foodPic' : 'falafel.jpeg','dollars' : '$6.99','index': 'vegan', 'description' : 'A falafel Pita sandwich, creamy Tahini sauce & one side dish', 'link': 'home3nutrition.html'},
  {'title': 'Tofu Pad Thai','foodPic' : 'tofu.jpeg','dollars' : '$7.75','index': 'vegan', 'description' : 'Rice Noodles with Tofu, Eggs, Green Onions, Bean Sprouts & Crushed Peanuts', 'link': 'home4nutrition.html'},
  {'title': 'Panda Bowl with Chow Mein and Honey Walnut Shrimp','foodPic' : 'honey.jpeg','dollars' : '$5.80','index': 'nut', 'description' : 'Stir Fried Noodles with Large tempura-battered shrimp, wok-tossed in a honey sauce and topped with glazed walnuts.', 'link': 'home5nutrition.html'},
  {'title': 'Greek Salad','foodPic' : 'salad.jpeg','dollars' : '$6.29','index': 'veg', 'description' : 'Lettuce, tomatoes, onions, cucumbers, olives, Feta, Garbanzo beans', 'link': 'home6nutrition.html'},
  {'title': 'Fried Rice','foodPic' : 'rice.jpeg','dollars' : '$3.29','index': 'egg', 'description' : 'Prepared steamed white rice with soy sauce, eggs, peas, carrots and green onions.', 'link': 'home7nutrition.html'},
  {'title': 'Quesadilla with Grilled Chicken','foodPic' : 'quesedilla.jpeg','dollars' : '$10.29','index': 'ten', 'description' : 'Toasted flour tortilla with a melted blend of cheeses and grilled all natural chicken. Served with our handmade guacamole, salsa fresca, sour cream and a side of tortilla chips.', 'link': 'home8nutrition.html'},
  {'title': 'Bean and Cheese Burrito','foodPic' : 'bean.jpeg','dollars' : '$15.30','index': 'veg1', 'description' : '"No-fried" pinto beans with a blend of cheeses and mild salsa. Wrapped in a toasted flour tortilla and served with a side of tortilla chips.', 'link': 'home9nutrition.html'},
  {'title': 'Panda Bowl with Chow Mein and Eggplant Tofu','foodPic' : 'eggplant.jpeg','dollars' : '$5.80','index': 'plant', 'description' : 'Stir Fried Noodles with lightly browned tofu, eggplant and red bell peppers tossed in a sweet and spicy sauce.', 'link': 'home10nutrition.html'},
  {'title': 'Panda Bowl with Chow Mein and Orange Chicken','foodPic' : 'orange.jpeg','dollars' : '$5.80','index': 'orange', 'description' : 'Stir Fried Noodles with crispy chicken wok-tossed in a sweet and spicy orange sauce.', 'link': 'home11nutrition.html'},
  {'title': 'Grilled plate with Tofu','foodPic' : 'tgrill.jpeg','dollars' : '$7.50','index': 'tofu', 'description' : 'Grilled tofu served with rice and grilled zucchinispared steamed white rice with soy sauce, eggs, peas, carrots and green onions and peanut sauce.', 'link': 'home12nutrition.html'},
  {'title': 'Grilled plate with Beef','foodPic' : 'beef.jpeg','dollars' : '$7.50','index': 'beef', 'description' : 'Grilled beef served with rice and grilled zucchinispared steamed white rice with soy sauce, eggs, peas, carrots and green onions and peanut sauce.', 'link': 'home13nutrition.html'}
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
  $("#orange").hide();
  $("#beef").hide();
}
if (localStorage.getItem('q1') == 'Pescatarian'){
  $("#noresc").hide();
  $("#ten").hide();
  $("#orange").hide();
  $("#beef").hide();
}
if (localStorage.getItem('q1') == 'Vegan'){
  $("#pesc").hide();
  $("#noresc").hide();
  $("#nut").hide();
  $("#veg").hide();
  $("#veg1").hide();
  $("#ten").hide();
  $("#orange").hide();
  $("#beef").hide();
}
if (localStorage.getItem('q2') == 'Nuts Allergy'){
  $("#nut").hide();
  $("#beef").hide();
  $("#tofu").hide();
  $("#vegan1").hide();
}
if (localStorage.getItem('q2') == 'Dairy Allergy'){
  $("#noresc").hide();
  $("#veg").hide();
  $("#veg1").hide();
  $("#ten").hide();
}
if (localStorage.getItem('q2') == 'Eggs Allergy'){
  $("#egg").hide();
}
if (localStorage.getItem('q3') == '$10-$15'){
  $("#veg1").hide();
}
if (localStorage.getItem('q3') == '$5-$10'){
  $("#ten").hide();
  $("#veg1").hide();
  $("#pesc").hide();
}
