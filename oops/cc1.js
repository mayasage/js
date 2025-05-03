//'use strict'

const Car = function (make, currSpeed) {
    this.make = make;
    this.currSpeed = currSpeed;
};

Car.prototype = {
    accelerate: function (speed) {
        if (!speed) return;
        this.currSpeed = (parseFloat(this.currSpeed) + parseFloat(speed)).toString() + ' km/hr';
        console.log(`currSpeed: ${this.currSpeed}`);
    },

    break: function () {
        this.currSpeed = (parseFloat(this.currSpeed) - 5).toString() + ' km/hr';
        console.log(`currSpeed: ${this.currSpeed}`);
    }
};

const bmw = new Car('bmw', '200 km/hr');
const mercedes = new Car('mercedes', '95 km/hr');
bmw.accelerate('10 km/hr');
bmw.break();
mercedes.accelerate('9000 km/hr');
mercedes.break();
