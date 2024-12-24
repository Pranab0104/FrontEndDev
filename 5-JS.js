// global
console.log(this);

// function
function a(){
    console.log(this);
}
a();

// method
var b = {
    name:function(){
        console.log(this.email);
    },
    age :25,
    email:"asuhgf9g"
}
b.name();

// fun inside method in es5
var obj = {
    Name : function(){
        console.log(this.age);//here this will reffer the object.
        function child(){
            console.log(this)//here this will reffer the window not any kind of object or other...Remember it.
        }
        child();
    },
    age: 25
}
obj.Name();

// fun inside method in es6
var obj1 ={
    Name: function(){
        const child = ()=>{
            console.log(this);//here the this value will take value from its parent which is obj1.
        }
        child();
    }
}
obj1.Name();

// constructor fun this value- new blank object
function abc(){
    console.log(this);
}

const ans = new abc();

// event listener this value- target the element where the element is selected as eventListener.
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})