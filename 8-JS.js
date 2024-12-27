// closure means ek function jo return krre dusra function. Or use krre parent function ka koi variable.
function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

var fnc = counter();
fnc();

// another ex.
function timer(){
    let a = 60;
    return setTimeout(function(){
        console.log(a);
    },2000)
}
let b = timer();
b();