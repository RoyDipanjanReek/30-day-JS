// Error Handling

// **Basic Error Handling with Try-catch**

//Write a function that intentionally theows a error and use a try-catch block to handle the error and log an appropriate message to the console.
function task1(){
    try {
        // let err = false
        // if(!err){
        //     console.log("There is an error");
        // }else{
        //     console.log("this is  error");
        // }
        throw "There is an error"   // Another way  
    } catch (error) {
        console.log(error);
    }
}
task1()

// Create a function that divides two numbers and throws an error if the denominator is zero. use try-catch to handle this error.

function task2(Numerator, Denominator) {
    try {
        if(Denominator !== 0){
            return Numerator/Denominator
        }else{
            console.log('Do not give denominator is equal to 0')
        }
    } catch (error) {
        console.log(error);
    }
}
console.log(task2(10,0));

// Write a script that include a try-catch block and finally block. Log message in the try, catch and finally blocks to observe the execution flow.

function task3(){
    // let statement = true;

    try {
        if(statement===true){
            console.log("we are trying");
        }else{
            console.log("ERROE");
        }
    } catch (error) {
        console.log("OH MY GOD YOU GOT AN ERROR");
    } finally{
        console.log("Finally it is executed");
    }
}
task3()
task3(false)

// Create  a custom errro class that extends the built in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block. 

class customError extends Error{
    constructor(message){
        super(message)
        this.message = 'customError'
    }
}
function riskyOpen(){
    throw new Error('This is new error for costom error')
}

function handleriskyOpen(){
    try {
        riskyOpen()
    } catch (error) {
        console.log('error', this.message);
    }finally{
        console.log("Execution completed");
    }
}
handleriskyOpen()

// Write a function that validate user input(e.g., checking if a string is not empty) and throws a custom error if the validate fails. Handle the custom error using a try-catch block.

// Create a promise that randomly resolve or rejects. Use .catch() to handle the rejection and log an approproate message to the console.

const promise6 = new Promise((resolve, reject) => {
    const random  = Math.round(Math.random()*10)

    setTimeout(() => {
        if(random % 2 === 0){
            resolve('Promise resolve')
        }else{
            reject(new Error('Promise Rejected'))
        }
    },1000)
})

promise6.then((data) => {
    console.log(data);
})
.catch((error)=> {
    console.error(error)
})

// Use try-catch within async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function tast7(){
    try {
        const data = await promise6
        console.log(data);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }finally{
        console.log("Finally its executed");
    }
}
tast7()

// Use the fetch Api to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("http://DipanjanRoy.com")
.then((res) => {
    if(!res) {
        throw new Error("This URL is not exit")
    }
})
.catch((error) =>{
    console.log("operation failed." , error.message);
})

// Use the fetch Api to request data from an invalid URL within an async function to handle errors using try-catch. log an appropriate error message.

async function tast9(){
    try {
        const data = fetch("http://DipanjanRoy.com")
        console.log(data);
    } catch (error) {
        console.log("Operation failed", error.message);
    }
}
tast9()






