// TODO: Javascript Closure 

// global scope
let x = 1;
const parentFunction = () => {
    // local scope
    let myValue = 2;

    console.log(x);
    console.log(myValue);
    
    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    return childFunction;
}

// you have to call the function to run it
const result = parentFunction();
console.log(result);

result();
result();
result();
console.log(x)


// TODO: Javascript Closure with IIFE 