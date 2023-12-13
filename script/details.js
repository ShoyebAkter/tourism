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