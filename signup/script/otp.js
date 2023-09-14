const otpFields = document.querySelectorAll('.otp-field');

otpFields.forEach((field, index) => {
  field.addEventListener('input', (event) => {
    const input = event.target;
    const nextField = otpFields[index + 1];

    if (input.value.length === 1) {
      if (nextField) {
        nextField.focus();
      } else {
        input.blur();
      }
    }
  });

  field.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && field.value === '') {
      const prevField = otpFields[index - 1];
      if (prevField) {
        prevField.focus();
      }
    }
  });
});

var ran_num = Math.floor(1000 + Math.random()*9000)
var secure_otp = document.getElementById("secure_otp");
secure_otp.textContent = ran_num;
var resend = document.getElementById("resend");

function startTimer(durationInSeconds) {
    const timerDisplay = document.getElementById('timmer');
    var resend = document.getElementById("resend")
    let remainingTime = durationInSeconds;
  
    function updateTimerDisplay() {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
  
      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      timerDisplay.textContent = formattedTime;
  
      if (remainingTime === 0) {
        clearInterval(timerInterval);
        timerDisplay.style.display = "none"
        resend.style.display = "inline"
        resend.addEventListener("click",function(){
            var ran_num_1 = Math.floor(1000 + Math.random()*9000)
            window.location.reload();
        })
      } else {
        remainingTime--;
      }
    }
  
    updateTimerDisplay();
    const timerInterval = setInterval(updateTimerDisplay, 1000);
  }

  startTimer(10);


  // start

  var form = document.querySelector("form");
  var otp_num = document.getElementsByClassName("otp-field");
  var not_valid= document.getElementById("not_valid");
  var numb = document.getElementById("numb")
  numb.textContent = JSON.parse(localStorage.getItem("temp_mobile"))

  form.addEventListener("submit",function(el){
      el.preventDefault();
      var str = "";
      for(var elem of otp_num){
        str += elem.value;
      }

      if(Number(str) == ran_num){
        not_valid.style.display = "none";
        
        var temp_num = JSON.parse(localStorage.getItem("temp_mobile")) || false;
        var userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
         
        var flag = false;
        userInfo.forEach(elemen => {
          if(elemen.mobile_num == temp_num){
             flag = true;
          }
        });

        if(flag){
           window.location.assign("./PassWord.html");
        }else{
          window.location.assign("./createac.html");
        }
      }else{
        not_valid.style.display = "block";
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