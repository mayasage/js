const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

// method
    Car.prototype.xen = function () {
        return 'thunder';
    }
// property
    Car.prototype.level = 'dark';

class EV extends Car {
    constructor (make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    };
};

const bmw = new Car('bmw', 200);
const tesla = new EV('tesla', '200km/hr', '23');

// output = dark
    console.log(Car.prototype.level);
    console.log(bmw.level);
    console.log(tesla.level);

// output = thunder
    console.log(Car.prototype.xen());
    console.log(bmw.xen());
    console.log(tesla.xen());

// EV Inheritance Chain
// Working (Calling a method/Accessing a property)
// 1. In EV? (The method will be copied on every instance.)
// 2. In EV.prototype?
// 3. In Car.prototype?
// 4. In Object.prototype?
// 5. null
// EV
    console.log(EV.__proto__ === Car);
    console.log(Car.__proto__ === Function.prototype);
    console.log(Function.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__ === null);

// EV.prototype
    console.log(EV.prototype.__proto__ === Car.prototype);
    console.log(Car.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__ === null);

// Car Inheritance Chain
// Working (Calling a method/Accessing a property)
// 1. In Car? (The method will be copied on every instance.)
// 2. In Car.prototype?
// 3. In Object.prototype?
// 4. null
// Car
    console.log(Car.__proto__ === Function.prototype);
    console.log(Function.prototype.__proto__ === Object.prototype);

// Car.prototype
    console.log(Car.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__ === null);

// tesla Inheritance chain.
// Working (Calling a method/Accessing a property)
// 1. In tesla?
// 2. In EV.prototype?
// 3. In Car.prototype?
// 4. In Object.prototype?
// 5. null
    console.log(tesla.__proto__ === EV.prototype);
    console.log(EV.prototype.__proto__ === Car.prototype);
    console.log(Car.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__ === null);

// bmw Inheritance chain.
// Working (Calling a method/Accessing a property)
// 1. In bmw?
// 2. In Car.prototype?
// 3. In Object.prototype?
// 4. null
    console.log(bmw.__proto__ === Car.prototype);
    console.log(Car.prototype.__proto__ === Object.prototype);
    console.log(Object.prototype.__proto__ === null);

