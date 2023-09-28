
document.querySelector(".cart_available_offers").addEventListener("click",showHidden)

function showHidden (){
  var showmore = document.querySelector(".hiddenOffers");
  if(showmore.style.display==="block"){
    showmore.style.display="none";
    document.querySelector(".showmore").innerText="Show More"
  }
  else {
    showmore.style.display="block";
    document.querySelector(".showmore").innerText="Show Less"
  }  
}

var cartarr = JSON.parse(localStorage.getItem("BagListObj"))||[];

var itemcount =cartarr.length;
localStorage.setItem("itemcount",itemcount)

if(itemcount===0){
  document.querySelector(".parent_con_ord").style.display = "none";
  document.querySelector(".empty_con_ord").style.display = "block";
}
else{
  document.querySelector(".parent_con_ord").style.display = "block";
  document.querySelector(".empty_con_ord").style.display = "none";
}

// quantity implement from here

cartarr.forEach(function(val,i) {
  if(!cartarr[i].quantity || val.quantity===0) cartarr[i].quantity = 1;
   
})

// To here

var MRP =  cartarr.reduce(function(sum,a,ind){
  return sum+ +(cartarr[ind].strikedoffprice.split(" ")[1])*cartarr[ind].quantity
},0);
localStorage.setItem("MRP",MRP)

       
       
var amount = cartarr.reduce(function(sum,a,ind){
  return sum+ +(cartarr[ind].price.split(" ")[1])*cartarr[ind].quantity
},0);
localStorage.setItem("amount",amount)

     
var discount = MRP - amount;
localStorage.setItem("discount",discount)

document.querySelector(".amount_pay").innerText= amount;
document.querySelector(".filldiscount").innerText= "- "+discount;
document.querySelector(".totalprice").innerText= MRP;
document.querySelector(".pricedets").innerText= `PRICE DETAILS ( ${itemcount} Items)`;


cartarr.map(function(ele,ind){
  // document.querySelector(".container").innerText = "" 
  var box = document.createElement("div");
  box.className ="main"
            

  var imgbox = document.createElement("div");
            
  var image =document.createElement("img");
  image.src = ele.image_url
  imgbox.append(image)

  var detailsbox = document.createElement("div");

  var name =document.createElement("p");
  name.innerText=ele.brand
  name.style.fontSize="20px";
  name.style.marginBottom ="-8px"


  var para =document.createElement("p");
  para.innerText=ele.para ;
  para.style.color="gray"

  var price = document.createElement("span");
  price.innerText = ele.price

  var strikedprice = document.createElement("span");
  strikedprice.innerText = ele.strikedoffprice;
  strikedprice.style.textDecoration = "line-through";
  strikedprice.style.color ="gray";


  var offer = document.createElement("span");
  offer.innerText =ele.offer;
  offer.style.color="red";


  var pricepara =document.createElement("p");
  pricepara.append(price,strikedprice)

  // quantity html from here
  var qnt = document.createElement("p");
  qnt.className ="quantity_log"
  // var qntdec = document.createElement("span");

  var qntspn = document.createElement("span");
  qntspn.innerText="Qty : ";
  var qntinput = document.createElement("input");
  qntinput.placeholder=" " +cartarr[ind].quantity + " Items";
  qntinput.type="number";
  qntinput.min="1";
  var qntbtn =document.createElement("button");
  qntbtn.innerText="Set Qty";
  qntbtn.addEventListener("click", function(){
    let qntcount= Number(qntinput.value);
    QuantityChange(ind, qntcount);
  })

  qnt.append(qntspn, qntinput, qntbtn );
  // To here
          
  detailsbox.append(name,para,pricepara,offer,qnt)

  var buttonbox = document.createElement("div");
          
  var remove =document.createElement("button");
  remove.className="removebtn";
  remove.innerText ="REMOVE";
  remove.addEventListener("click",function(){
    removeitem(ind)
  }) 
  buttonbox.append (remove) 
  var detplusbtnbox= document.createElement("div");
  detplusbtnbox.append(detailsbox,buttonbox);
  box.append(imgbox, detplusbtnbox);
  document.querySelector(".container").append(box)

})
//  quantity function from here
function QuantityChange(ind, qntcount){
  console.log(cartarr[ind])
  if(Number(qntcount)<1){
    alert("Quantity should be greater or equal to 1 or you can remove the item")
  }
  else{
    cartarr[ind].quantity= qntcount;
    localStorage.setItem("BagListObj",JSON.stringify(cartarr));
    window.location.href ="cart.html";
  }
}
// To here

document.querySelector(".wishlistlink1").addEventListener("click",sendtowish)
document.querySelector(".wishlistlink").addEventListener("click",sendtowish)

function sendtowish(){
  window.location.href="wishlist.html";
}

function removeitem(ind){
  cartarr.splice(ind,1);
  localStorage.setItem("BagListObj",JSON.stringify(cartarr))
  window.location.href ="cart.html";
         
}

document.querySelector(".makeorder").addEventListener("click",profile)

function profile(){
  window.location.href="../payment/address.html";
}

document.querySelector(".apply").addEventListener("click",discountfun);

function discountfun(){

  var payable_amount = +(localStorage.getItem("amount"));
  var int_promo = document.querySelector("#promo").value;

  if( payable_amount>300 && int_promo=="MASNTRA300"){
    amount = amount-300;
    discount =discount+300;
    localStorage.setItem("amount",amount)  ;
    localStorage.setItem("discount",discount)
    document.querySelector(".amount_pay").innerText= amount;
    document.querySelector(".filldiscount").innerText= "- "+discount;
    document.querySelector(".apply").removeEventListener("click",discountfun);
  }
    // console.log( amount, discount)

}

document.getElementById('landingPage').addEventListener('click', function(){
  window.location.href = "../index.html";

}) 

document.querySelector("#second").addEventListener("click",function(){
  window.location.href="../payment/address.html";
})



        

      

