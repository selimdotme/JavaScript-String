const names ='alimuddin';
console.log(names);
const name = names.slice(2,5);
console.log(name);
console.log(name.includes('i'));  // includes er bitore ja dibo ta ace kina seta dekhabe and jdi thake tahole true dekhabe and jdi na thake tahole false dekhabe



// split niye kheya start kra jai and split muloto sentence e alada alada upadane vag kre dibe 
const sentence = 'i am a good person and hard working person';
console.log(sentence);
console.log(sentence.split());// ai khane pura sentence e vag kre felbe
console.log(sentence.split('')) // '' er obostay sentence er protity upadan k vag kre felbe
console.log(sentence.split(' ')) // '' ar bitore space dile sentence er protity word k vag kre felbe
console.log(sentence.split(','));// '' ar bitore comma dileo sentence er protity word k alada alada vabe vag kre nibe
console.log(sentence.split('a'));// '' ar vitore j word da dibo sei word da output e dekhabe na 



//  join niye ektu khela hye jak join er kaj holo jura deoya


const realFriends = ['selim','hossain','md'];
console.log(realFriends.join()) ;
console.log(realFriends.join('-'));
console.log(realFriends.join("|"));


// concat kra 
// duita string k jura diyar khete concat used krte hoi

const first = 'md';
const last = 'selim';
// const fullName = first + last;
const fullName = first + ' ' + last;
console.log(fullName);

// concat used 

// const fullName2 = first.concat(last);
const fullName2 = first.concat(" ").concat(last); //space deoyar jno abr o concat used krte hoice;
console.log(fullName2);