function check(form){
  if(form.usr.value == "myuserid" && form.password.value=="mypswrd" ){
    location.replace("home.html")
  }
  else if(form.usr.value=="teamIncredibles" && form.password.value=="easyEats"){
    location.replace("home.html")
  }
  else{
    alert("Username or Password is incorrect")
  }
}
