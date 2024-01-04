const tableBody = document.getElementById('tableBody');
const getOrderData=async()=>{
    const userEmail=localStorage.getItem("userEmail")
    let order;
        await fetch(`https://backendtour.vercel.app/payment`)
        .then((res) => res.json())
        .then((result) => {order=result })
        .catch((error) => console.error(error))
        const filteredObjects = order.filter(function(obj) {
            return obj.From === userEmail;
          });
    
    let tableHtml;
    tableHtml=filteredObjects.map((order,key)=>`
    <tr class="order">
    <td class="order-number" data-title="Order">
        <a href="*">#${key}</a>
    </td>

    <td class="order-date" data-title="Date">
        ${order.date}
    </td>

    <td class="order-status" data-title="Status">
        ${order.guide}
    </td>

    <td class="order-total" data-title="Total">
        <span class="amount">${order.price}</span> for each
    </td>

    <td class="order-actions" data-title="Action">
        ${order.place}
    </td>
</tr>
    `).join('');
    tableBody.innerHTML = tableHtml;
}
getOrderData();