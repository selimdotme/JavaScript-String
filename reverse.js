let sentence = 'i am learning web dev.';
// const result = '.ved dew gninrael ma i';


for(const letter of sentence){
    console.log(letter);
}

let reverse = ''
for(const word of sentence){
    reverse = word + reverse;
}
console.log(reverse);
