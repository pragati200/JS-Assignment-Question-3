console.log("Examples of Undefined: ");

{
    console.log("Example 1:");
    let variable;
    
    console.log(variable);    // undefined
}

{
    console.log("Example 2:");
    let arr = [10, , 38, 49];
    console.log(arr);    //[10, empty, 38, 49]
    
    console.log(typeof (arr[1]));    // undefined
}

{
    console.log("Example 3:");
    let mul = (a, b) => {
        let multiply = a * b;
        // return multiply
    }
    let ans = mul(2, 3);

    console.log(ans);    // undefined
}

console.log("\nExamples of Not Defined:");

{
    console.log("Example 1:");
    console.log(variable);

    let variable;
    // Uncaught ReferenceError: b is not defined
}