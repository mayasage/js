console.log("-- No nesting --");

const S = function () {
  this._hidden = function () {
    console.log("I am hidden");
    console.log("this:", this);
  };

  this.seen = function () {
    console.log("I am seen");
    console.log("this:", this);
    console.log("I call hidden");
    this._hidden();
  };

  this.nested = {
    n1: console.log("n1 this", this) /* this = s */,

    n1f: function () {
      console.log("n1f this", this); /* this = nested */
    },

    n2: {
      n2a: console.log("n2a this", this) /* this = s */,

      n2f: function () {
        console.log("n2f this", this); /* this = n2 */
      },

      n2b: {
        n2b1: console.log("n2b1 this", this) /* this = s */,

        n2bf: function () {
          console.log("n2bf this", this); /* this = n2b */
        },
      },
    },
  };

  this.nestedBind = {
    n1: console.log("n1 this", this) /* this = s */,

    n1f: function () {
      console.log("n1f this", this); /* this = s */
    }.bind(this),

    n2: {
      n2a: console.log("n2a this", this) /* this = s */,

      n2f: function () {
        console.log("n2f this", this); /* this = s */
      }.bind(this),

      n2b: {
        n2b1: console.log("n2b1 this", this) /* this = s */,

        n2bf: function () {
          console.log("n2bf this", this); /* this = s */
        }.bind(this),
      },
    },
  };

  this.nestedArrow = {
    n1: console.log("n1 this", this) /* this = s */,

    n1f: () => {
      console.log("n1f this", this); /* this = s */
    },

    n2: {
      n2a: console.log("n2a this", this) /* this = s */,

      n2f: () => {
        console.log("n2f this", this); /* this = s */
      },

      n2b: {
        n2b1: console.log("n2b1 this", this) /* this = s */,

        n2bf: () => {
          console.log("n2bf this", this); /* this = s */
        },
      },
    },
  };
};

/**
 * Conclusion
 *   "this" inside function() refers to its first parent object.
 *    To make it refer to something else, we can use bind.
 *
 *   Since all the "console.logs" that aren't part of any function get executed
 *    during the time of initialization (after using the "new" keyword),
 *    the "this" keyword results in the same value everytime.
 *   Similarly, "bind(this)" is also executed at the time of initialization,
 *    thus refering to the same instance everytime.
 *
 *   Arrow Function
 *    "this" inside an arrow function is null by default
 */
const s = new S();
s.seen(); /* Works perfectly */

console.log();
console.log("--  Nested  --");
s.nested.n1f();
s.nested.n2.n2f();
s.nested.n2.n2b.n2bf();
console.log("---------------");
console.log();

console.log();

console.log("--NestedBind--");
s.nestedBind.n1f();
s.nestedBind.n2.n2f();
s.nestedBind.n2.n2b.n2bf();
console.log("---------------");
console.log();

console.log();

console.log();
console.log("--NestedArrow--");
s.nestedArrow.n1f();
s.nestedArrow.n2.n2f();
s.nestedArrow.n2.n2b.n2bf();
console.log("---------------");
console.log();

console.log("---------------");

console.log();

console.log("--  Nesting  --");

const X = function () {
  this._hidden = function () {
    console.log("I am hidden");
    console.log("this:", this);
  };

  this.nested = {
    seen: function () {
      console.log("I am seen");
      console.log("this:", this);
      console.log("I call hidden");
      this._hidden();
    },
  };
};

const x = new X();

try {
  x.nested.seen();
} catch (err) {
  console.error("Error:", err.message); /* Not Found */
}

console.log("---------------");

console.log();

(function () {
  console.log("-- Normal Function --");
  // console.log("default this", this);
  console.log("is this == module.exports ?", this === module.exports);
  console.log("is this === global ?", this === global); /* true */
  console.log("---------------------");
})();

console.log();

(() => {
  console.log("-- Arrow Function --");
  // console.log("default this", this);
  console.log("is this === null ?", this === null);
  console.log("is this === undefined ?", this === undefined);

  console.log(
    "this.__proto__ === Object.prototype",
    this.__proto__ === Object.prototype
  ); /* true */

  console.log("is empty Object", Object.keys(this).length === 0); /* true */
  console.log("--------------------");
})();

console.log();
console.log("-- Top-level Code --");
console.log("is this === module.exports ?", this === module.exports); /* true */
console.log("is this === global ?", this === global);
console.log("--------------------");

/* Checking "this" when function is assigned to a variable. */
console.log();

const normalFunc = function () {
  console.log("-- Normal Function --");
  // console.log("default this", this);
  console.log("is this == module.exports ?", this === module.exports);
  console.log("is this === global ?", this === global); /* true */
  console.log("---------------------");
};

normalFunc();

console.log();

const arrowFunc = () => {
  console.log("-- Arrow Function --");
  // console.log("default this", this);
  console.log("is this === null ?", this === null);
  console.log("is this === undefined ?", this === undefined);

  console.log(
    "this.__proto__ === Object.prototype",
    this.__proto__ === Object.prototype
  ); /* true */

  console.log("is empty Object", Object.keys(this).length === 0); /* true */
  console.log("--------------------");
};

arrowFunc();
/**
 * Conclusion
 *   Assignment operator doesn't matter.
 */
