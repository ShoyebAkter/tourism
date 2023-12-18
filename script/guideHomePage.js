const itemContainer = document.getElementById('messageContainer');
const detailsContainer = document.getElementById('detailsSection');

    const getMessage=async()=>{
        let messages;
        const name=localStorage.getItem("guideName")
        await fetch(`https://backendtour.vercel.app/${name}`)
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
            return obj.guide === 'Tahsin';
          });
          console.log(filteredObjects);
          
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
        console.log(detailsHtml);
        itemContainer.innerHTML = itemsHTML;
        detailsContainer.innerHTML = detailsHtml;
    }
    getMessage()