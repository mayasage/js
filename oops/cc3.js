'use strict';

const Car = function (make, speed) {
    this._make = make.toString();
    this._speed = speed.toString();
};

Car.prototype.accelerate = function (speedIncBy) {
    this._speed = (parseFloat(this._speed) + parseFloat(speedIncBy)).toString();
};

Car.prototype.brake = function (speedDecBy) {
    this._speed = (parseFloat(this._speed) - parseFloat(speedDecBy)).toString();
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this._charge = charge.toString();
};

//EV.prototype.__proto__ = Car.prototype; // works, but don't use this
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this._charge = chargeTo.toString();
};

EV.prototype.accelerate = function (speedIncBy, batteryDecBy) {
    Car.prototype.accelerate.call(this, speedIncBy);
    this._charge = (parseFloat(this._charge) - parseFloat(batteryDecBy))
        .toString();
};

EV.prototype.toString = function () {
    return `${this._make} going at ${this._speed} km/h, with a charge of ` +
        `${this._charge}`;
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake(5);
console.log(tesla.toString());
tesla.accelerate(20, 1);
console.log(tesla.toString());

