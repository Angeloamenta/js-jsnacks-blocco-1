// jsnack2
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// // nomi contenuti dentro l'array

// const names = ["angelo", "paolo", "maria", "piero", "gianni"];

// // chiedo all'utente il suo nome
//  let yourName = prompt("dimmi il tuo nome");

// // cerco dentro alla lista il nome dell'utente
// let ind = false
// for (let i = 0; i < names.length; i++) {
//     let correctName = names[i];
//     console.log(correctName);
    
//     if (yourName == correctName) {
//         ind = true
//     }
// }

// if (ind == true) {
//     alert("sei in lista");
// }else {
//     alert("non ci sei");
 
// }

// nomi contenuti dentro l'array

const names = ["angelo", "paolo", "maria", "piero", "gianni"];

// chiedo all'utente il suo nome
 let yourName = prompt("dimmi il tuo nome");

// cerco dentro alla lista il nome dell'utente
let ind = false
let i = 0;

while (ind == false && i < names.length) {
    
    if (yourName == names[i]) {
        ind = true
    }

    i++
}

if (ind == true) {
    alert("sei in lista");
}else {
    alert("non ci sei");
 
}