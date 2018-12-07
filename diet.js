function savePrice(price){
  localStorage.setItem('q3', price);
}
function savePreference(pref){
  localStorage.setItem('q1', pref);
}
  /*
  if (pref == "Vegetarian"){
    document.getElementById('myLink').href = "quizresultsVEG.html";
  }
  if (pref =="Vegan"){
    document.getElementById('myLink').href = "quizresultsVEGAN.html"
  }
  if (pref == "Pescatarian"){
    document.getElementById('myLink').href = "quizresultsPESC.html"
  }
}*/
function saveAllergy(algy){
  localStorage.setItem('q2', algy);
}
