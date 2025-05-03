'use strict';

class Car {
    #make;
    #speed;

    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    };

    // Setters
        set make (make) {
            this.#make = make.toString();
        };

        set speed (speed) {
            this.#speed = speed.toString();
        };

        set speedUS (speed) {
            this.speed = (parseFloat(speed) * 1.6);
        };

    // Getters
        get make () {
            return this.#make;
        };

        get speed () {
            return parseFloat(this.#speed);
        };

        get speedUS () {
            return parseFloat(this.speed) / 1.6;
        };

    // Instance Methods
        accelerate (incSpeedBy) {
            this.speed = parseFloat(this.speed) + parseFloat(incSpeedBy);
            return this;
        };

        brake (decSpeedBy) {
            this.speed = parseFloat(this.speed) - parseFloat(decSpeedBy);
            return this;
        };

        // Override
        toString () {
            return `${this.make} is going at ${this.speed} km/h`;
        };
};

class EV extends Car {
    #charge;

    constructor (make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    };

        set charge (charge) {
            this.#charge = charge.toString();
        };

        get charge () {
            return this.#charge;
        };

    // Instance Methods
        chargeBattery (chargeTo) {
            this.charge = chargeTo;
        };

        // Override
        accelerate (incSpeedBy, decChargeBy) {
            super.accelerate(incSpeedBy);
            //Car.prototype.accelerate.call(this, incSpeedBy);
                // this is the constructor way.
            this.charge = parseFloat(this.charge) - parseFloat(decChargeBy);
            return this;
        }

        // Override
        toString () {
            return `${this.make} is going at ${this.speed} km/h, with a ` + 
                `charge of ${this.charge}`;
        };
};

const rivian = new EV('Rivian', 120, 23);
console.log(rivian.toString());
rivian.accelerate(20, 1).brake(5);
console.log(rivian.toString());

console.log(rivian.speedUS);
