let  parent = document.querySelector("#parent");
parent.addEventListener("click", function(details){
    if(details.target.id === "Play"){
        console.log("play Song");
    }
    else if(details.target.id === "Pause"){
        console.log("pause Song");
    }
    else{
        console.log("Plese click on the button.")
    }
})