/*let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);*/

/*let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);*/

/*cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);*/

/*Given word = 'Rutabaga', why does word.length return the integer 8, but word[8] is undefined?
word length is the number of character, word [8] is the index*/

// stringName.indexOf(substr) ex:
pet = 'cat';
console.log(pet.indexOf('t'));

// stringName.toLowerCase()
console.log(pet.toLowerCase());

// stringName.toUpperCase()
console.log(pet.toUpperCase());

// stringName.trim
console.log(pet.trim());
pets = pet.trim()
console.log(pets);


// stringName.replace()
console.log(pet.replace('t','b'));


// stringName.slice()
console.log(pet.slice(0));

// Method Chaining
let language = "JavaScript";
console.log(language.replace('J','Q').slice(0,5));

console.log(language.slice(1,6));


let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

// Character Encoding .charCodeAt()
 
let nonprofit = "LaunchCode";
console.log(nonprofit.charCodeAt(0));

