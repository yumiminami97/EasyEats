const ul = document.querySelector('ul');
const data = JSON.parse(localStorage.getItem('favorites'));
const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
data.forEach(favorites => {
  liMaker(favorites);
});

document.getElementById("preferenceQ").innerHTML= localStorage.getItem('q1');
document.getElementById("allergyQ").innerHTML= localStorage.getItem('q2');
document.getElementById("priceQ").innerHTML= localStorage.getItem('q3');

/*if (typeof(Storage) !== "undefined"){
  document.getElementById("preferenceQ").innerHTML= localStorage.getItem("q1");
}else {document.getElementById("preferenceQ").innerHTML="web storage not supported."}

if (typeof(Storage) !== "undefined"){
  document.getElementById("allergyQ").innerHTML= localStorage.getItem("q2");
}else {document.getElementById("preferenceQ").innerHTML="web storage not supported."}

if (typeof(Storage) !== "undefined"){
  document.getElementById("priceQ").innerHTML= localStorage.getItem("q3");
}else {document.getElementById("preferenceQ").innerHTML="web storage not supported."}*/
