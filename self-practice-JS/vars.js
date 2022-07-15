//var declaration-used when the variable needs to be reassigned again and again
var myName = 'saniya';
console.log(myName);

//let declaration- used when block level declaration is to be made
{
    let city = 'mum';
    console.log(city);
}
city = 'nashik'
console.log(city);

const sample = [2,7,1,4,0];
console.log(sample);

/*
most common case types:
1.] camelCase
2.]kebab-case
3.]snake_case
4.]PascalCase
*/

//ref data types
function any() {
    
}
console.log(any, (typeof any));

//arrow functions
const hello = () =>{
    console.log('hello!')
}
hello();
console.log(hello, (typeof hello));

const marks = {
    zach: 45,
    tia: 88,
    danny: 78,
    fiona: 90
}

console.log(marks, (typeof marks));

const no =40;
console.log(no.toFixed(9), (typeof no));