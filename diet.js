if (localStorage.getItem('q1') == null){
  localStorage.setItem('q1', 'No Restrictions');
}
if (localStorage.getItem('q2') == null){
  localStorage.setItem('q2', 'No Allergy');
}
if (localStorage.getItem('q1=3') == null){
  localStorage.setItem('q3', 'No Price Preference');
}
function savePrice(price){
  localStorage.setItem('q3', price);
}
function savePreference(pref){
  localStorage.setItem('q1', pref);
}
function saveAllergy(algy){
  localStorage.setItem('q2', algy);
}
