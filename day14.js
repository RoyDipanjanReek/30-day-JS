// Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetMessage() {
    return `
        Hello all, my name is ${this.name} and my age is ${this.age}
        `;
  }
}
const Person1 = new Person("Dipanjan Roy", 22);
// console.log(Person1.greetMessage());

// Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge = function(age){
    this.age = age
}
// console.log("Original Age:-", Person1.age);
Person1.updateAge(23)
// console.log("Updated age is", Person1.age);
// console.log(Person1.greetMessage());

// Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the Student ID. 

class Student extends Person{
    constructor(name,age,studentID){
        super(name,age)
        this.studentID = studentID
    }

    getStudentID(){
        return this.studentID
    }
}
const Dipanjan = new Student("dipanjan Roy", 22, 13)
// console.log("Student ID:", Dipanjan.studentID);
// console.log(Dipanjan.greetMessage());

// Override the greeting method in the Student class to include the student ID in the message. Log the overriden greeting message.

Student.prototype.greetMessage = function(){
    return `
    Hello my name is ${this.name}, my age is ${this.age} and my student ID is ${this.studentID}
    `
}
console.log(Dipanjan.greetMessage());

// Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.genericGreeting = function(){
    return `Hello world , This is a generic Greeting`
}
console.log(Person.genericGreeting());

// Add a static property to the Student class to keep track of the number of students created. Incement this property in the constructor and log the total number of students.

class Student1 extends Person{
    static countStudent = 0
    constructor(name, age, studentID){
        super(name,age)
        this.studentID = studentID

        Student1.countStudent++
    }

    getStudentID(){
        return this.studentID
    }

    getStudentDetails(){
        return `Student name: ${this.name}, Age: ${this.age}, Student Id: ${this.studentID}`
    }

    static getTotalStudent(){
        return Student1.countStudent
    }
}

const student1 = new Student1("Student1", 15 , 1)
const student2 = new Student1("Student2", 18 , 2)
const student3 = new Student1("Student3", 28 , 3)

console.log(`Total number of student: ${Student1.getTotalStudent()}`);

// Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person2 {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get FullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set FullName(name){
        const parts = name.split('')
        if(parts.length === 2){
            this.firstName = parts[0]
            this.lastName = parts[1]
        }else{
            throw error("Invalid error");
            
        }
    }
}
const person2 = new Person2("Dipanjan", "Roy")
console.log("Full Name: ", person2.FullName);



// Add a setter method to the Person class to  update the name properties(firstName and lastName). Update the name using the setter and log the updated full name. 

// person2.FullName = "RickRoy"
// console.log("Full Name: (using setter): ", person2.FullName);


// Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated throught these methods. 

class BankAccount{
    #myBalance;  // Private Field

    constructor(initialBalance){
        this.#myBalance = initialBalance
    }

    depositMoney(amount){
        if(amount>0){
            this.#myBalance += amount
            console.log(`Deposited, ${amount}` );
            
        }else{
            console.log("Invalid Amount");
        }
    }

    withdraw(amount){
        if(amount>0 && this.#myBalance >= 0){
            this.#myBalance -= amount
            console.log(`Withdraw : ${amount}`);
            
        }else{
            console.log("Invalid Amount");
        }
    }

    getBalance(){
        return this.#myBalance
    }

}

// Create an instance of the Account class and test the deposit and withdraw methods, logging this balance after each operation.

const myAccount = new BankAccount(1000)

myAccount.depositMoney(50)
console.log(`Current Balance: $${myAccount.getBalance()}`);

myAccount.withdraw(100)
console.log(`Current Balance: $${myAccount.getBalance()}`);

myAccount.depositMoney(-20)
console.log(`Current Balance: $${myAccount.getBalance()}`);
