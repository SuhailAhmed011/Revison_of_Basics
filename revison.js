// Using anonymous function as arguement.

/*setTimeout(function(){
    console.log("suhail! should i get a coffee")
}, 5000); 

// Immediatly Invoked function execution
let person = {
    firstName: 'suhail',
    lastName: 'ahmed'
};
(function(){
    console.log(person.firstName + " " + person.lastName)
}) (person); 

// Javacsript is dynamically typed language.
let message = 'hello';
message = 100;
message = null;
message = undefined;
console.log(typeof message); 

// how for loop working => printing tables using for loop

for(let j = 4; j<=4*10; j+=4 ){
    console.log(j);
} 


for(let i = 1; ; i+=3){
    console.log(i)
    if(i>10){
        break;
    }
}

let sum = 0;
for(let i = 0; i<=9; i++){
    console.log(i);
} 

// Do while loop
let count = 0;
do{
    console.log(count);
    count++;
}while(count<5) */

function add(a,b){
    return a + b;
}
let sum = add(10,20);
console.log('Sum:',sum);
