'use strict';

// Working...
// 1. Creates {}.
    const emptyObj = {};
    console.log(emptyObj.__proto__ === Object.prototype);

// Let...
    class Car {
        constructor (make, currSpeed) {
            this.make = make;
            this.currSpeed = currSpeed;
        };
    };

// 2. Set emptyObj.__proto__ === Parent.prototype.
    // The parent here = Car...
    // which is a "Function Object"
    
    // Example...
    const bmw = new Car('bmw', '200 km/hr');
    console.log(bmw.__proto__ === Car.prototype);
    
    // Therefore, anything added to Parent.prototype can be accessed by all 
    // instances created from the constructor function *using "new"*.
    // If you want prototypical inheritance without "new", you'll have to
    // manually set the __proto__.
    // Because...
    const a_function_that_returns_an_object = function (make, currSpeed, prototype) {
        const return_this_object = {};

        Object.assign(return_this_object, { make, currSpeed });

        // this object has __proto__ set to Object.prototype.
        console.log(return_this_object.__proto__ === Object.prototype);

        // Manually setting prototype...
        return_this_object.__proto__ = prototype;

        return return_this_object;
    }
    
    //const mercedes = a_function_that_returns_an_object('mercedes', '90 km/hr');
    // therefore, the __proto__ of mercedes is also Object.prototype...
    //console.log(mercedes.__proto__ === Object.prototype);

    // We'll have to manually set the __proto__ property to Car.prototype.
    //mercedes.__proto__ = Car.prototype;
    //console.log(mercedes.__proto__ !== Object.prototype);
    //console.log(mercedes.__proto__ === Car.prototype);

    // Or we can do this inside the a_function_that_returns_an_object.
    const mercedes = a_function_that_returns_an_object('mercedes', '90 km/hr', Car.prototype);
    console.log(mercedes.__proto__ === Car.prototype); 

// 3. Inside the constructor function, set this = emptyObj.
// 4. If the function does not return an object... return this.
    // Example...
    const Ship = function (make, currSpeed) {
        // Step 1.
        const return_this_object = {};

        // Step 2.
        return_this_object.__proto__ = Ship.prototype;
        //console.log(Ship);
        //console.log(Object.keys(Ship));

        // Step 3.
        // this = the newly created empty object.
        //console.log(this);
        this = return_this_object; // Not possible.

        // Step 4.
        // Function returns an object.
        Object.assign(return_this_object, { make, currSpeed });
        return return_this_object;
    };

    const behemoth = new Ship('behemoth');
