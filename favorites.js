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
