var complexFood = [
  {'title': 'Panda Bowl with Chow Mein and Honey Walnut Shrimp','foodPic' : 'honey.jpeg','dollars' : '$5.80','index': 'nut', 'description' : 'Stir Fried Noodles with large tempura-battered shrimp, wok-tossed in a honey sauce and topped with glazed walnuts.', 'link': 'pandaentree1nutrition.html'},
  {'title': 'Panda Bowl with Chow Mein and Orange Chicken','foodPic' : 'orange.jpeg','dollars' : '$5.80','index': 'nut', 'description' : 'Stir Fried Noodles with crispy boneless chicken bites, tossed in the wok with our secret sweet and spicy orange sauce.', 'link': 'pandaentree2nutrition.html'},
  {'title': 'Panda Bowl with Chow Mein and Eggplant Tofu','foodPic' : 'eggplant.jpeg','dollars' : '$5.80','index': 'nut', 'description' : 'Stir Fried Noodles with lightly browned tofu, eggplant and red bell peppers tossed in a sweet and spicy sauce.', 'link': 'pandaentree3nutrition.html'},
  {'title': 'Fried Rice','foodPic' : 'rice.jpeg','dollars' : '$3.29','index': 'egg', 'description' : 'Prepared steamed white rice with soy sauce, eggs, peas, carrots and green onions.', 'link': 'pandaside1nutrition.html'},
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
