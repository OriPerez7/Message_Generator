// INTRODUCTION

let character_name = 'Orian';

console.log('Hello, ' + character_name);

//RANDOM HOUSE GENERATOR

const sorting_hat = () => {
    let num = Math.floor(Math.random() * 4) + 1;

    switch (num) {
        case 1: 
            return 'Gryffindor';
            break;
        case 2:
            return 'Slytherin';
            break;
        case 3:
            return 'Hufflepuff';
            break;
        case 4:
            return 'Ravenclaw';
            break;
    };
};

console.log("I'm the Sorting Hat");
console.log('Hmm... Ah yes, I see... So that is what you think, huh?');
console.log('Then you should go to... ');
console.log(sorting_hat() + '!');

// RANDOM FAVORITE SUBJECT GENERATOR
const fav_subject = () => {
    let random_num = Math.floor(Math.random() * 4) + 1;

    switch (random_num) {
        case 1:
            console.log("Looks like you're good at Transfiguration...");
            console.log('You successfully turned a rat into a cup!');
            break;
        case 2:
            console.log("Looks like you're good at Potions...");
            console.log("You successfully created a Felix Felicis potion!");
            break;
        case 3:
            console.log("Looks like you're good at Defense Against the Dark Arts...");
            console.log('You conjured your patronus for the first time!');
            break;
        case 4:
            console.log("Looks like you have a hand with animals...");
            console.log("Hagrid wants to introduce you to Buckbeack after you Magic Creatures class!");
            break;
    };
};

fav_subject();