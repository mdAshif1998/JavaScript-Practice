// Immediately Invoked Function Expression (IFIE)

// Named EFIE
(function cool(){
    console.log(`DB Connected`);
})();

// Unnamed EFIE
( (name) => {
    console.log("Hello", name);
})('World');


// JavaScript Execution Context
// {} -> Global Execution Context ("this")
// In Browser it is an Window Object
// Functional Execution Context
// Eval Execution Context (Property of Global Object)
// {} -> 1. Memory Creation Phase (Memory Allocation) 2. Execution Phase

// 1. Global Execution (Allocate in 'this')
// 2. Memory Phase (val1 = undefined, val2 = undefined addNum = defination, result1 = undefined, result2 = undefined)
// Execution Phase (val1 = 10, val = 5, result1 = Another Execution Context (new variable environment + execution thread (1. Memory Phase (val1 = undefined, val2 = undefined, total = undefined) 2. Execution Context (num1 = 10, num2 = 5, total = 15, Then return to global executional context)) = 15 then delete the local executional context), result2 = Another local execution context)

// Call stack