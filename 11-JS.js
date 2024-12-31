// how
const ent = new Event("me-event-hu");

document.querySelector("button")
.addEventListener("me-event-hu", function(){
    alert("event hua h.")
})


document.querySelector("button").dispatchEvent(ent);