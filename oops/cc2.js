'use strict';

class Car {
    constructor (make, currSpeed) {
        this.make = make;
        this.currSpeed = currSpeed;
    };

    // "set" binds an object property to a function to be called when there is
        // an attempt to set that property.
    set make(make) {
        // validation
        this._make = make;
    }

    // "get" binds an object property to a function that will be called when 
        // that property is looked up.
    get make() {
        // single point of getting make
        return this._make;
    }

    set currSpeed(currSpeed) {
        // validation
        this._currSpeed = currSpeed;
    }

    get currSpeed() {
        // single point of getting currSpeed
        return this._currSpeed;
    }

    get currSpeedUS () {
        return parseFloat(this.currSpeed) / 1.6;
    };

    set currSpeedUS (speedInmih) {
        this.currSpeed = (parseFloat(speedInmih) * 1.6).toString() + ' km/h';
    };

    accelerate() {
        this.currSpeed = (parseFloat(this.currSpeed) + 10).toString() + 
            ' km/hr';
        console.log(`${this.make} is going at ${this.currSpeed}`);
    }

    brake() {
        this.currSpeed = (parseFloat(this.currSpeed) - 5).toString() + 
            ' km/hr';
        console.log(`${this.make} is going at ${this.currSpeed}`);
    }
};

const ford = new Car('Ford', '120 km/hr');
console.log(ford.currSpeedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.currSpeedUS = 50;
console.log(ford);
