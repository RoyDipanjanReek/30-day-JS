// ES6+ features

let personName = 'dipanjan roy'
let personAge = 21

const message = `Person Name: ${personName} ,Person Age: ${personAge}`

let multiLine = `This is a
multiline using ES6 feature`
console.log(multiLine);

let arr = [1,22,3,4,5,6,7,8,9]
let [a,b,c] = arr
console.log(`first: ${a}`);
console.log(`second: ${b}`);
console.log(c);

let object_destructuring = {
    name : 'Dipanjan',
    title: 'Roy',
    age: 21,
    from: 'Panagarh'
}

let {title,age} = object_destructuring
// console.log(title,age);

let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]   Two different way to do it
// console.log(...arr1,6,7,8,9); 

function addTwoNumber(num1, num2=10){
    console.log(`${num1+num2}`);
}
addTwoNumber(100,100)

let name = 'dipanjan'
let age2 = 20
let profession = 'engineer'

function showDetaile(){
    return (`Name: ${this.name} and age is ${this.age2}`)
}

let obj = {
    name,
    age,
    profession,
    showDetaile
}

console.log(obj);