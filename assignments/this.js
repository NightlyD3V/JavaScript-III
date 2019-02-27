/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global (window) binding 
* 2. Implicit or automatic binding 
* 3. Explicit or functional binding 
* 4. the 'New' keyword binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const myObject = {
    name: "Tyler",
    sayMyName: function() {
        console.log(`My name is ${this.name}`);
    }
}
console.log(myObject.sayMyName());
// Principle 3

// code example for New Binding
/*CONSTRUCTOR FUNCTION*/
function Person(attributes) {
    this.name = attributes.name;
}

Person.prototype.sayMyName = function() {
    return `My name is ${this.name}`;
}

const me = new Person({
    name: 'Tyler',
    age: 23
})
console.log(me.sayMyName());
// Principle 4

// code example for Explicit Binding
const ninja = {
    name: 'Genji'
}

const weapons = ['Katana', 'Cattletrops', 'Smoke Bomb'];

function myNinja(skills) {
    return `My name is ${this.name} and these are my weapons: ${weapons}`;
}

console.log(myNinja.call(ninja, weapons));