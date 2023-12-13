const itemContainer = document.getElementById('messageContainer');

    const getMessage=async()=>{
        let messages;
        await fetch('http://localhost:3000/message/Tahsin')
        .then((res) => res.json())
        .then((result) => {messages=result })
        .catch((error) => console.error(error))
        let itemsHTML;
        itemsHTML =messages.map((msg,id)=>
            `<div class="messageBox"><div>From :${msg.from}</div><div>Message:${msg.message}</div></div>`
        ).join('');
        itemContainer.innerHTML = itemsHTML;
    }
    getMessage()