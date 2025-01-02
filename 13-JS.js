//  to perfom an event in a button for a specific action.

var btn = document.querySelector('button');
btn.addEventListener('click', function(){
    btn.textContent = "Starting...";
    btn.style.backgroundColor = "crimson";
})

//there are  many types also like 
// mouseleave
// mouseover
// dblclick, and so on - Remember these things things carefully.

document.querySelector("body")
.addEventListener("mousemove", function(dets){
    console.log(dets);//to know the details about mouse in the X and Y axis.
})