function divide(x,y){
    try{
        if(y===0){
            throw Error("Something went wrong!");
        }
        console.log(x/y);
    }
    catch(err){
        console.error(err);
    }
}

divide(45,0);