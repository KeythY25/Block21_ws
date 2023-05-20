// Create class Car
class Car {
    constructor(make, model, year){
        // Set the constructor parameters
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Have a method to getDescription of the car
    getDescription(){
        return `The ${this.make} ${this.model} ${this.year}`;
    }
}

// Create a subclass ElectricCar
class ElectricCar extends Car{
    constructor(make, model, year, range){
        super(make, model, year)
        this.range = range;
    }

    // Create method to show the range of the car
    getDescription(){
        return `${super.getDescription()} ranges ${this.range} miles`;
    }
}

// Create an instance for Tesla Model S 2019
const Tesla = new ElectricCar("Tesla", "Model S", "2019", "300");
// print out tesla instance
console.log(Tesla.getDescription());