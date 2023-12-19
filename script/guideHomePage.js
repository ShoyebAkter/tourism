const itemContainer = document.getElementById('messageContainer');
const detailsContainer = document.getElementById('detailsSection');

    const getMessage=async()=>{
        let messages;
        const loginEmail=localStorage.getItem("loginEmail");
        let emailInfo;
        await fetch('https://backendtour.vercel.app/user')
        .then((res) => res.json())
        .then((result) => { emailInfo = result })
        .catch((error) => console.error(error))
        const userObject = emailInfo.find(obj => obj.email === loginEmail);
        // console.log(userObject);

        await fetch(`https://backendtour.vercel.app/message/${userObject.name}`)
        .then((res) => res.json())
        .then((result) => {messages=result })
        .catch((error) => console.error(error))

        let payment;
        await fetch(`https://backendtour.vercel.app/payment`)
        .then((res) => res.json())
        .then((result) => {payment=result })
        .catch((error) => console.error(error))
        // console.log(payment);
        const filteredObjects = payment.filter(function(obj) {
            return obj.guide === userObject.name;
          });
        //   console.log(filteredObjects);
          
        let itemsHTML;
        itemsHTML =messages.map((msg,id)=>
            `<div class="messageBox">
            <div>From :${msg.from}</div>
            <div>TouristName: ${msg.touristName}</div>
            <div>TouristPhone: ${msg.touristPhone}</div>
            <div>TourPlace: ${msg.place}</div>
            <div>Message:${msg.message}</div>
            
            </div>`
        ).join('');
        let detailsHtml;
        detailsHtml =filteredObjects.map((value,id)=>
            `
            <div class="detailsSection">
            <div>User: ${value.From}</div>
            <div>Date: ${value.date}</div>
            <div>No of Days Tour: ${value.days}</div>
            <div>Adults: ${value.adults} Childs: ${value.childs}</div>
            <div>Place: ${value.place}</div>
            <div>Pickup Location: ${value.pickUpLocation}</div>
            <div>TotalPrice: ${(parseInt(value.adults)+parseInt(value.childs))*value.price}</div>
            </div>
            
            `
        ).join('');
        // console.log(detailsHtml);
        itemContainer.innerHTML = itemsHTML;
        detailsContainer.innerHTML = detailsHtml;
    }
    getMessage()