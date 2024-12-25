// call
const obj = {name:"Pranav"}

function ab(){
    console.log(this);
}

ab.call(obj);

// apply
const obj1 = {name:"Pranav"}

function ab(x,y,z){
    console.log(this,x,y,z);
}

ab.apply(obj,[1,26,27]);

// bind
const obj2 = {name:"Krongton"}

function abc(){
    console.log(this);
}

const ksdjuha = abc.bind(obj2);

ksdjuha();