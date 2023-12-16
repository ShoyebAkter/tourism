const name = localStorage.getItem("guide")
console.log(name);
document.getElementById("name").innerHTML = name;
document.getElementById("guideName").innerHTML = name;
document.getElementById("tourGuide").innerHTML = name;
document.getElementById("tourguidename").innerHTML = name;

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
    const totalPrice=(parseInt(adults)+parseInt(childs))*price
    document.getElementById("totalPrice").innerText=`Pay: RM ${totalPrice}`
    localStorage.setItem("date",dateInput)
    localStorage.setItem("adults",adults)
    localStorage.setItem("childs",childs);
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
    console.log(name);
    const msg=document.getElementById("msg").value;
    const messageInfo={
        name:name,
        message:msg,
        from:from
    }
    console.log(messageInfo);
    fetch("http://localhost:3000/message",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },body:JSON.stringify(messageInfo)
                    })
    
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
    const paymentDetails={
        user:user,
        date:date,
        adults:adults,
        childs:childs,
        guide:guide,
        days:days,
        place:place,
        price:price,
    }
    // Create a new toast element
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "Your payment is successful";
    const cardNumber=document.getElementById("cardnumber").value;
    const expDate=document.getElementById("expirationdate").value;
    if(cardNumber && expDate){
        fetch("http://localhost:3000/payment", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }, body: JSON.stringify(paymentDetails)
                        })
        document.getElementById("payment-toast-container").appendChild(toast);
  
        // Show the toast
        setTimeout(function () {
          toast.style.display = "block";
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