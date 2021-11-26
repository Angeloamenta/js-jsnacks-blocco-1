// jsnack1
// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// let sum = 0;

// for (let i = 0; i < 10; i++) {
//     let numbers = parseInt(prompt("inserisci il tuo numero"));

//     console.log(numbers); 
//     sum += numbers;  
// }


//  console.log(sum);


let i = 0;
let sum = 0;

while (i < 10) {
    let numbers = parseInt(prompt("inserisci il tuo numero"));

     console.log(numbers); 

     sum += numbers;  
     i++;
}

console.log(sum);