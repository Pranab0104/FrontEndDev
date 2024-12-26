function beingHuman(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
}

beingHuman.prototype.printName = function(){
    console.log(this.email);
}

const human1 = new beingHuman("Pranab", 20, "pranabmandal@gmail.com");
const human2 = new beingHuman("Krongton", 20, "krongtonmondal01@gmail.com");