
//<------- TOGGLE MENU JS ----------->//
function myFunction() {
  var dropDownMenu = document.getElementById("myDropdown")
  dropDownMenu.classList.toggle("show")
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//<---------- HYPERLINK FOR PROFILE ---------->//
document.getElementById('profile').addEventListener('click', function(){
    window.location.href = "../index.html"
})


// Initialize login_part from localStorage or an empty object
let login_part = JSON.parse(localStorage.getItem("loginkey")) || {};

// Function to update the UI based on login status
function updateUI() {
    const mail = document.getElementById("mail_id");
    const login1 = document.getElementById("login1");
    const login2 = document.getElementById("login2");
    const logoutBtn = document.getElementById("Logout_btn");

    if (login_part.status === "loggedIn") {
        // User is logged in
        if (login_part.email) {
            mail.innerText = "Welcome, " + login_part.email; // Display email with a welcome message
        }
        mail.style.display = "block";
        login1.style.display = "none";
        login2.style.display = "none";
        logoutBtn.style.display = "block";
    } else {
        // User is logged out
        mail.style.display = "none";
        login1.style.display = "block";
        login2.style.display = "block";
        logoutBtn.style.display = "none";
    }
}

// Initial UI update
updateUI();

// Event listener for the Logout button
document.getElementById("Logout_btn").addEventListener("click", () => {
    login_part.status = "loggedOut";
    localStorage.setItem("loginkey", JSON.stringify(login_part));
    updateUI();
});