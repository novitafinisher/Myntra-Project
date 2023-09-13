document.querySelector("#btn").addEventListener("click", myAcc)

    var accArr = JSON.parse(localStorage.getItem("numbers"))||[]

    function myAcc(event) {
        event.preventDefault()
        
        var accObj = {
            num: document.querySelector("#phone").value
        } 

        if(accObj.num.length === 10){
            accArr.push(accObj)
        
            localStorage.setItem("numbers", JSON.stringify(accArr))

            window.location.href = "loginOtp.html"
        }else{
            document.querySelector("#numDetail").textContent = "Please enter a valid mobile number(10 digits)"
        }
        document.querySelector("#phone").value = "" 
    }