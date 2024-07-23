function checkTheNumber(number){
    if (number % 2 == 0) {
        console.log(`${number} is Even Number`);
    }else{
        console.log(`${number} is Odd Number`);
    }
}

function squareRoot(number){
    return number*number;
}

function maximunOfTwoNumber(num1, num2){
    if(num1 > num2){
        console.log(`${num1} is grater than ${num2}`);
    }else{
        console.log(`${num2} is grater than ${num1}`);
    }
}

function concatenateTwoNumber(frist, second){
    let result = frist+second;
    console.log(result);
}

const sumOfTwo = ((num1,num2) => {
    return num1+num2;
})

const checkTheWord = ((name) => {

})

const productTwoNumber = ((num1,num2=10) => {
    return num1*num2;
})

const person = ((name,age=18) => console.log((`My name is ${name}. I am ${age} and a programer`)))


let number = 25;
// checkTheNumber(number)
// console.log(squareRoot(number));
// maximunOfTwoNumber(8,6);
// concatenateTwoNumber('REEK ', 'ABCD')
// console.log(sumOfTwo(10,100));
// console.log(productTwoNumber(6));
person('Reek');

