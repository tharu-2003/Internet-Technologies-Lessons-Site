console.log("OOPConcepts.js is loaded..!");

class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    getDetails(){
        return `Make : ${this.make} , Model : ${this.model}`;
    }
}

let vehicle = new Vehicle('Toyota' , 'Corolla');
console.log(vehicle.getDetails());

class Car extends Vehicle {
    constructor(make,model,color){
        super(make,model);
        this.color = color;
    }
    getDetails(){
        return `Make : ${this.make} , Model : ${this.model} , Color : ${this.color}`;
    }
}

let car = new Car('Toyota','Corrolla','red');
console.log(car.getDetails());
