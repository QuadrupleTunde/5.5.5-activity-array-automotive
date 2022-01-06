//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")
import vehicle from "./vehicleBaseClass.js";
class Car extends vehicle{constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage);
    this.maximumPassengers =	6;
    this.passenger	= 0;
    this.numberOfWheels =	4;
    this.maximumSpeed = 200;
    this.fuel =	100;
    this.scheduleService =	false;


}

loadPassenger(num){if (this.passenger< this.maximumPassengers){
    if(num + this.passenger <= this.maximumPassengers){
        this.passenger = num;
        return this.passenger;
    }
    else{
        console.log("no room for passanger")
    }

}
    else{
        console.log("it is full")
    }

}

start(){if (this.fuel >0){
    start == true;
    console.log("Engine start")
}
else{
    console.log("run out of fuel")
}
}
scheduleService(mileage){
    if(this.mileage> 30000){ 
        maintenance == true;
         return this.scheduleService
    }


    else{
    return this.scheduleService = false;
    
}
}}



//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)