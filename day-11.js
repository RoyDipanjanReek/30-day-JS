//Create a promise that resolve with a message after a 2 second timeout and log the message
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("this is a string which logged after 2 sec");
  }, 2000);
});

// Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch()

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("this is task 2");
    reject("Some error occurred")
  }, 2000);
});

promise1
  .then((msg) => {
    console.log(msg);
  })
  .catch((Error) => {
    console.log(Error);
  });

// Create a sequence of promises that simulate fetching data from a server. Chain the promise to log message in specific order.

let Promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        studentFristName: "Dipnajan",
        studentLastName: "Roy",
        studentRollNo: 13,
        studentCollage: "setgoi",
      });
    }
  }, 2000);
});

Promise2
.then((studentData) => {
    console.log(studentData);
    return studentData
})
.then((studentname) => {
    console.log(`Student Frist Name : ${studentname.studentFristName}`);
    return studentname
})
.then((studentTitle) => {
    console.log(`Student Title: ${studentTitle.studentLastName}`);
    return studentTitle
})
.then((roll) => {
    console.log(`Student Roll number: ${roll.studentRollNo}`);
    return roll
})
.catch((err) => {
    console.log("some error occurred", err);
})

// Write an async function that waits fro a promise to resolve and then logs the resolve value

const promise3 = new Promise((resolve, reject) => {});

// Write an async function that handles a rejected promise using try-catchand log the error message

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = true;
    if (!err) {
      resolve("resolve");
    } else {
      reject("it has some error");
    }
  }, 1000);
});
async function consumePromise4() {
  try {
    let result = await promise4;
    console.log("Resolve", result);
  } catch (error) {
    console.log(error);
  }
}
consumePromise4();

// Use the fetch API to get data from a public Api and log responcse data to the console using promise

fetch("https://api.github.com/users/RoyDipanjanReek")
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(`User name: ${data.name}`);
})
.catch((error) => {
  console.log(error);
});

// Use the fetch API to get data from a public Api and log responcse data to the console using async/await

async function usingFetch(){
  try {
    const response = await fetch("https://api.github.com/users/RoyDipanjanReek")
    const data = await response.json()
    console.log(`User bio: ${data.bio}`);
  } catch (error) {
    throw error
  }
}
usingFetch()

// Use Promise.all to wait for multiple promises to resolve and then log al their values.

const Prom1 = new Promise((resolve, reject) =>{
  setTimeout(resolve,200,'one')
})
const Prom2 = new Promise((resolve, reject) =>{
  setTimeout(resolve,100,'two')
})
const Prom3 = new Promise((resolve, reject) =>{
  setTimeout(resolve,400,'three')
})
const Prom4 = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("four")
  },100)
})
const Prom5 = new Promise((resolve, reject) =>{
  setTimeout(() => {
    reject("five")
  },300)
})


Promise.all([Prom1,Prom2,Prom3,Prom4])
.then((data) => {
  console.log("Promises resolve: ", data);
})
.catch((err) => {
  console.log(err);
})

Promise.all([Prom1,Prom2,Prom3,Prom4,Prom5])
.then((data) => {
  console.log("Promises resolve: ", data);
})
.catch((err) => {
  console.log(err);
})


