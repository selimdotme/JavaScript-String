const country = "Bangladesh";
const division = 'NewKhale';
const district = `Jamalpur`;
const thana = new String('Demra');
console.log(country);
console.log(typeof division);
console.log(typeof thana);

// string and array also same process work


// array type

const number = [1,2,3,4,5,6,7];
console.log(number.length);
console.log(number[1]);


// string type

const name = 'Selim';
console.log(name);
console.log(name.length);
console.log(name[0]);
name[0]='K'; // string k immutable --> ( not change ) bole and array holo mutable --> change hbe
console.log(name);  // string was not change but array was chanhe