const moveToGuide=(place,price,days)=>{
    localStorage.setItem("place",place)
    localStorage.setItem("price",price)
    localStorage.setItem("days",days)
    window.location.href="guide.html"
}