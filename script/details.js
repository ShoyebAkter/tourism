const name = localStorage.getItem("guide")
const image=localStorage.getItem("image")
console.log(name);
document.getElementById("name").innerHTML = name;
document.getElementById("guideName").innerHTML = name;
document.getElementById("tourGuide").innerHTML = name;
document.getElementById("tourguidename").innerHTML = name;
const guideImage = document.getElementById('guideImage');
const guideImage2 = document.getElementById('imageGuide');
guideImage.src=image;
guideImage2.src=image;

// Function to open the popup
function openPopup() {
    
    document.getElementById('popup1').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup1').style.display = 'none';
}

// Attach click event listener to the "Message" button
document.querySelector('.msgBtn').addEventListener('click', openPopup);

// Attach click event listener to the close button in the popup
document.querySelector('.close').addEventListener('click', closePopup);
function openPaymentPopup() {
    const dateInput = document.getElementById('selectedDate').value;
    const adults = document.getElementById('adults').value;
    const childs = document.getElementById('childs').value;
    const price=localStorage.getItem("price");
    const pickUpLocation=document.getElementById("location").value;
    const totalPrice=(parseInt(adults)+parseInt(childs))*price
    document.getElementById("totalPrice").innerText=`Pay: RM ${totalPrice}`
    localStorage.setItem("date",dateInput)
    localStorage.setItem("adults",adults)
    localStorage.setItem("childs",childs);
    localStorage.setItem("pickUpLocation",pickUpLocation)
    document.getElementById('popup2').style.display = 'block';
}

// Function to close the popup
function closePaymentPopup() {
    document.getElementById('popup2').style.display = 'none';
}

// Attach click event listener to the "Message" button
document.querySelector('.paymentBtn').addEventListener('click', openPaymentPopup);

// Attach click event listener to the close button in the popup
document.querySelector('.closePopUp').addEventListener('click', closePaymentPopup);

const sendMsg = () => {
    const name=localStorage.getItem("guide")
    const from=localStorage.getItem("userEmail")
    const place=localStorage.getItem("place")
    const msg=document.getElementById("msg").value;
    const touristName=document.getElementById("touristName").value;
    const tourisPhone=document.getElementById("touristPhone").value;
    const messageInfo={
        touristName:touristName,
        touristPhone:tourisPhone,
        name:name,
        message:msg,
        from:from,
        place:place
    }
    fetch("https://backendtour.vercel.app/message",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },body:JSON.stringify(messageInfo)
                    })
    
                    document.getElementById('popup1').style.display = 'none';
}

function showPaymentToast() {
    const user=localStorage.getItem("userEmail")
    const date=localStorage.getItem("date");
    const adults=localStorage.getItem("adults");
    const childs=localStorage.getItem("childs");
    const guide=localStorage.getItem("guide");
    const days=localStorage.getItem("days");
    const place=localStorage.getItem("place");
    const price=localStorage.getItem("price");
    const pickUpLocation=localStorage.getItem("pickUpLocation");
    const paymentDetails={
        user:user,
        date:date,
        adults:adults,
        childs:childs,
        guide:guide,
        days:days,
        place:place,
        price:price,
        pickUpLocation:pickUpLocation
    }
    // Create a new toast element
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "Your payment is successful";
    const cardNumber=document.getElementById("cardnumber").value;
    const expDate=document.getElementById("expirationdate").value;
    if(cardNumber && expDate){
        fetch("https://backendtour.vercel.app/payment", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }, body: JSON.stringify(paymentDetails)
                        })
        document.getElementById("payment-toast-container").appendChild(toast);
  
        // Show the toast
        setTimeout(function () {
          toast.style.display = "block";
          document.getElementById('popup2').style.display = 'none';
        }, 200);
      
        // Hide the toast after 3 seconds
        setTimeout(function () {
          toast.style.display = "none";
          // Remove the toast element from the DOM after it's hidden
          document.getElementById("payment-toast-container").removeChild(toast);
        }, 3000);
    }
    // Append the toast to the container
    
  }