const school = 'oxford international school';

// console.log(school);

// UpperCase : ABCD;
// LowerCase : abcd;


const book = "Bangla";
const subject = 'bangla';

if(subject.toLocaleLowerCase() == book.toLocaleLowerCase()){
    console.log('onek hoice porte boso');

}
else{
    console.log('ekhn o porte boso nai');

}

// string er space niye khela 

const name = 'Selim ';
const nam =' selim';

if(name.trim().toLocaleLowerCase() == nam.toLocaleLowerCase().trim()){
    console.log('Ekhn to kisu krte hbe');

}
else{
    console.log('aro porichom kro bro');
}