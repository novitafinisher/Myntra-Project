var form = document.querySelector("form");
var warning = document.getElementById("warning");
localStorage.setItem("status",JSON.stringify(false));


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

form.addEventListener("submit",function(el){
    el.preventDefault();

    var num = el.target.number_input.value;
    
    if(num.length != 10){
        warning.style.display = "block";
    }else{
        warning.style.display = "none";
        localStorage.setItem("temp_mobile",JSON.stringify(Number(el.target.number_input.value)));
        
        window.location.assign("./otp.html");
    }
})
