const tourGuides = [
    {
        id: 1,
        name: "Fahan",
        image: './images/guides/fahan.png',
        description: "Fluent in English, Tamil, Bahasa Melayu.",
        email: 'info@mysite.com'
    },
    {
        id: 2,
        name: "Fahan",
        image: './images/guides/fahan.png',
        description: "Fluent in English, Tamil, Bahasa Melayu.",
        email: 'info@mysite.com'
    },
    {
        id: 3,
        name: "Fahan",
        image: './images/guides/fahan.png',
        description: "Fluent in English, Tamil, Bahasa Melayu.",
        email: 'info@mysite.com'
    },
    {
        id: 4,
        name: "Fahan",
        image: './images/guides/fahan.png',
        description: "Fluent in English, Tamil, Bahasa Melayu.",
        email: 'info@mysite.com'
    },
    {
        id: 5,
        name: "Fahan",
        image: './images/guides/fahan.png',
        description: "Fluent in English, Tamil, Bahasa Melayu.",
        email: 'info@mysite.com'
    },
    {
        id: 6,
        name: "Fahan",
        image: './images/guides/fahan.png',
        description: "Fluent in English, Tamil, Bahasa Melayu.",
        email: 'info@mysite.com'
    }
]
const itemContainer = document.getElementById('guideSection');

const initApp = () => {
    let itemsHTML;
    itemsHTML = tourGuides.map((item, key) => `
    <div class="card">
    <div class="cover-photo">
        <img src="${item.image}" class="profile">
    </div>
    <h3 class="profile-name">"${item.name}"</h3>
    <p class="about">"${item.description}"</p>
    <button onclick="select()" class="btn">Select</button>
    <div class="icons">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
    </div>
</div>
        `).join('');
        itemContainer.innerHTML = itemsHTML;
}
initApp()
const select=()=>{
    window.location.href="details.html";
}