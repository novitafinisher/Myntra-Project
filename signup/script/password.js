var form = document.querySelector("form");
var pass_code = document.getElementById("pass_code");
var alert_ac = document.getElementById("alert_ac");

let login_part = JSON.parse(localStorage.getItem("loginkey"))||{};

form.addEventListener("submit",function(el){
    el.preventDefault();
    var pass = el.target.pass_code.value;

    var temp_mob = JSON.parse(localStorage.getItem("temp_mobile"));
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    

    var flag = false;
    var obj ;

    userInfo.forEach(element => {
        if(element.mobile_num == temp_mob){
            obj = element;
            flag = true;
        }
    });

    if(flag && obj.pas_code == pass_code.value){
        alert_ac.style.display = "none";
        localStorage.setItem("status",true);
        
        login_part.status = "loggedIn";
        localStorage.setItem("loginkey",JSON.stringify(login_part));

        window.location.assign("../index.html");
    }
    else{
        // alert_ac.style.display = "block";
        login_part.status = "loggedIn";
        localStorage.setItem("loginkey",JSON.stringify(login_part));
        localStorage.setItem("status",false);
        window.location.assign("../index.html");
    }
})


// /////////////

// navbar.js

document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
  
    if (navbarPlaceholder) {
      // Fetch the navigation bar content directly
      fetch("../index.html")
        .then(response => response.text())
        .then(htmlContent => {
          const tempContainer = document.createElement("div");
          tempContainer.innerHTML = htmlContent;
  
          const navbar = tempContainer.querySelector("#navbar");
  
          if (navbar) {
            const clonedNavbar = navbar.cloneNode(true);
            navbarPlaceholder.appendChild(clonedNavbar);
          }
        });
    }
  });
  
  // //////////////////
  