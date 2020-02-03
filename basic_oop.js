/* A normal function, creating and returning a new object. */
function createRect(a, b)
{
    let rect = {}; // object literal
    rect.a = a;
    rect.b = b;
    rect.area = function()
    {
        return rect.a * rect.b;
    }
    return rect;
}

let r1 = createRect(5, 6);
console.log('normal function: a='+r1.a+', b='+r1.b+', area='+r1.area());

/* Constructor function.
 *
 * JavaScript's version of a class.
 * Defines properties and methods.
 * A constructor function name should start with a capital letter. */
function Rect(a, b)
{
    /* properties defined inside the constructor */
    this.a = a;
    this.b = b;
}

/* methods defined on the constructor's prototype */
Rect.prototype.area = function() { return this.a * this.b; };

let r2_1 = new Rect(6, 5);
let r2_2 = new Rect(12,12);
console.log('constructor function \''+r2_1.constructor.name+'\': a='+r2_1.a+', b='+r2_1['b']+', area='+r2_1.area());
console.log('constructor function \''+r2_2.constructor.name+'\': a='+r2_2.a+', b='+r2_2['b']+', area='+r2_2.area());

/* Use the Object() constructor to create a new object. */
let r3 = new Object();
r3['a'] = 4;
r3.b = 6;
r3['area'] = function() { return this.a * this.b; };
console.log('Object() constructor: a='+r3.a+', b='+r3['b']+', area='+r3.area());

/* Pass an object literal to the Object() constructor as a parameter. */
let r4 = new Object({
    a: 8,
    b: 7,
    area: function() { return this.a * this.b; }
});
console.log('Object literal parameter: a='+r4.a+', b='+r4['b']+', area='+r4.area());

/* Create a new object from a specified prototype object. */
let r5 = Object.create(r1);
console.log('create() method: a='+r5.a+', b='+r5.b+', area='+r5.area());

/* Constructor property points to the original constructor function. */
let r6 = new r2_1.constructor(7, 4);
console.log('constructor property: a='+r6.a+', b='+r6.b+', area='+r6.area());


/*
 * Prototypal inheritance
 */
 

/* Square is subclass, Rect is superclass */
function Square(l)
{
    /* Call the Rect constructor function for the Square object. */
    Rect.call(this, l, l);
}

/* Create a new object, using the existing object as the prototype
 * of the newly created object. */
Square.prototype = Object.create(Rect.prototype);

/* Fix the constructor property. */
Square.prototype.constructor = Square;

let s = new Square(5);
console.log(`subclass: a=${s.a}, b=${s.b}, area=${s.area()}`);


/*
 * ECMAScript 2015 Classes
 * modern way of writing classes
 */

class Ellipse {
    constructor(r1, r2) {
        this._r1 = r1;
        this._r2 = r2;
    }
    
    get r1() {
        return this._r1;
    }
    
    get r2() {
        return this._r2;
    }
    
    set r1(newR1) {
        this._r1 = newR1;
    }
    
    set r2(newR2) {
        this._r2 = newR2;
    }
    
    get area() {
        return Math.PI * this.r1 * this.r2;
    }
}

/* subclassing */
class Circle extends Ellipse {
    constructor(r) {
        super(r, r);
        this._r = r;
    }
    
    get r() {
        return this._r;
    }
    
    set r(newR) {
        this._r = this.r1 = this.r2 = newR;
    }
}

let ellipse = new Ellipse(1, 2);
let circle = new Circle(2);

console.log(`ellipse: r1=${ellipse.r1}, r2=${ellipse.r2}, area=${ellipse.area}`);
console.log(`circle: r=${circle.r}, area=${circle.area}`);

ellipse.r1 = 2;
ellipse.r2 = 4;

console.log(`ellipse: r1=${ellipse.r1}, r2=${ellipse.r2}, area=${ellipse.area}`);

circle.r = 4;
console.log(`circle: r=${circle.r}, area=${circle.area}`);
