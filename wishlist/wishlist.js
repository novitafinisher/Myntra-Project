

var wisharr =JSON.parse(localStorage.getItem("wishListObj"))||[];

var itemcount = wisharr.length;
document.querySelector(".wishcount").innerText =` ${itemcount} Items`

wisharr.map(function(ele,ind){

    var box =document.createElement("div")
    
   
    var image =document.createElement("img")
    image.src =ele.image_url;

    var imgbox =document.createElement("div")
    box.className ="imgbox"
    imgbox.append(image)

    box.append(imgbox)

    var para =document.createElement("p");
    para.innerText=ele.brand ;
    para.style.color="gray";
    box.append(para)

    var price = document.createElement("span");
    price.innerText = ele.price
    price.style.color ="black"

  var strikedprice = document.createElement("span");
  strikedprice.innerText = ele.strikedoffprice;
  strikedprice.style.textDecoration = "line-through";
  strikedprice.style.color ="gray";


  var offer = document.createElement("span");
  offer.innerText =ele.offer;
  offer.style.color="red";

  var pricepara =document.createElement("p");
  pricepara.className="pricepara"
  pricepara.append(price,strikedprice,offer)
  box.append(pricepara)

  var buttonrm =document.createElement("button")
  buttonrm.innerText ="Remove"
  
  buttonrm.addEventListener("click", function(){
      removefromwish(ind)
  })


  var buttonbag =document.createElement("button")
  buttonbag.innerText ="MOVE TO BAG";
  
  buttonbag.addEventListener("click", function(){
   sendtocart(ele,ind)
})



  var buttonholder = document.createElement("div");
  buttonholder.className ="buttonholder"
  buttonholder.append(buttonrm,buttonbag)
  box.append(buttonholder)

   
    document.querySelector(".container").append(box)
})



function removefromwish(ind){

wisharr.splice(ind,1)
localStorage.setItem("wishListObj",JSON.stringify(wisharr))
window.location.href="wishlist.html"

}

// localStorage.setItem("BagListObj" , JSON.stringify(bagList))
var baglist = JSON.parse(localStorage.getItem("BagListObj"))||[];

function sendtocart(ele,ind){

  baglist.unshift(ele);
  localStorage.setItem("BagListObj",JSON.stringify(baglist))

  wisharr.splice(ind,1)
  localStorage.setItem("wishListObj",JSON.stringify(wisharr))
    window.location.href="wishlist.html"

     }

document.getElementById('landingPage').addEventListener('click', function(){
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