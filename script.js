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