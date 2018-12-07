var complexFood = [
  {'title': 'Tofu Pad Thai','foodPic' : 'tofu.jpeg','dollars' : '$7.75','index': 'vegan', 'description' : 'Rice Noodles with Tofu, Eggs, Green Onions, Bean Sprouts & Crushed Peanuts', 'link': 'lemonmeal1nutrition.html'},
  {'title': 'Grilled Plate with Tofu','foodPic' : 'tgrill.jpeg','dollars' : '$7.75','index': 'vegan', 'description' : 'Rice Noodles with Tofu, Eggs, Green Onions, Bean Sprouts & Crushed Peanuts', 'link': 'lemonmeal2nutrition.html'},
  {'title': 'Grilled Plate with Beef','foodPic' : 'beef.jpeg','dollars' : '$7.75','index': 'vegan', 'description' : 'Rice Noodles with Tofu, Eggs, Green Onions, Bean Sprouts & Crushed Peanuts', 'link': 'lemonmeal3nutrition.html'},

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
