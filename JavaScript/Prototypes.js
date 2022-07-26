//Object lierals
const person = {
    alive: true
}

const musician = {
    plays: true
}

// Js now has getPrototypeOf() and setPrototypeOf() methods instead of using __proto__
Object.setPrototypeOf(musician, person);

console.log(musician.plays)
// missing property => go to person
console.log(musician.alive)

// Extending the prototype chain => general to specific to more specific
const guitarist = {
    strings: 6,
    __proto__: musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

// NOTE: No circular reference allowed (person.__proto__ can't be guitarist) 
// NOTE: The __proto__ value must be an object or null.
// NOTE: An object with getter and inherit from one object 

// Object with getter and setter methods 
const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather"; //Note keyword "this"
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);

//Walking up the prototype chain - props and method are not copied
console.log(luxuryCar.valueOf());

// Getting the keys of an object
console.log(Objects.keys(luxuryCar));
//loop through each object key

Object.keys(luxuryCar).forEach(key => {
    console.log(key)
});