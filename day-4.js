for (let i = 0; i <= 10; i++) {
    // console.log(i); 
}

const number = 5;

let sum = ""
for (let i = 1; i <= 10; i++) {
    sum += i;
}
// console.log(`${sum}`);

let num;

// while (let i > 10) {
    // console.log(`${i+num}`);
    // i++;
// }

for(let i=1; i<=5;i++){
    let pattern="";
    for (let j = 1; j <= i; j++) {
       pattern += '*'
    }
    // console.log(pattern);
}

for (let i = 0; i < 10; i++) {
    if(i == 5){
        continue;
    }
    // console.log(i);
}

for (let i = 0; i < 10; i++) {
    if(i==7){
        break;
    }
    console.log(i);
    
}