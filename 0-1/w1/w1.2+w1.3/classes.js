const dog={
  name:"doggie",
  legcount:4,
  speaks:"bhow bhow"
}
const cat={
  name:"cat",
  legcount:4,
  speaks:"meow meow"
}

console.log("animal "+dog["name"]+" " +dog["speaks"]);
console.log("animal "+cat["name"]+" " +cat["speaks"]);
//animal doggie bhow bhow
// animal cat meow meow
//but to avoid these repetition we can make use of the function

function printStr(animal){
    console.log("animal "+animal["name"]+" " +animal["speaks"]);
}

console.log(printStr(dog))
console.log(printStr(cat))

//animal doggie bhow bhow
// undefined
// animal cat meow meow
// undefined

//from where does this undefined came 
//because printstr already has the console.log we are using it again\

class Animal{
  constructor(name,legcount,speaks){
    this.name=name;
    this.legcount=legcount;
    this.speaks=speaks;
  }
  static myType(){
    console.log("Animal")
  }
  speak(){
    console.log("hi there "+ this.speaks);
  }

}


class Alien{
  constructor(name,legcount,speaks){
    this.name=name;
    this.legcount=legcount;
    this.speaks=speaks;
  }
  static myType(){
    console.log("alien")
  }
  speak(){
    console.log("hi there "+ this.speaks);
  }

}
let dog1={
  name:"dog",
  legcount:4,
  speas:"bhow bhow"
}
//from now dont do this 
console.log(Animal.myType());//--->Animal
// console.log(Animal.speak())-- this return an error because the function speak is associated with objects and the class
let dogg=new Animal("dog",4,"bhow bhow bhow");//create object
let catt=new Animal("cat",4,"meow meow");
dogg.speak();
catt.speak();//call function on object

 //hi there bhow bhow bhow
// hi there meow meow



//best example to understand the classes in detailed way :


class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }

  static info() {
    console.log("Cars are vehicles with 4 wheels.");
  }
}

// Create an object (instance)
const myCar = new Car("Toyota", 120);
myCar.drive();       // Toyota is driving at 120 km/h

Car.info();          // Cars are vehicles with 4 wheels.
