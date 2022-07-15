const hour = new Date().getHours();
let greeting;

//if else
if (hour < 18) {
  console.log('Good day!');
} else {
  console.log('Good Evening');
}

console.log("-------------------------------------------------------------------------------------------")

//for loop
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  console.log(cars[i]);
}

console.log("-------------------------------------------------------------------------------------------")

//nested if else if
const age = 2;
const indian = true;
const licence = false;
if (age >= 18 && indian) {
  console.log('you can drive.');
}
else if (age > 18 && licence) {
  console.log('please renew your license');
}
else {
  console.log('you cannot drive.');
}

console.log("-------------------------------------------------------------------------------------------")

//while loop
let k = 0;
while (k < 10) {
  console.log('hello');
  k += 1;
}
console.log("-------------------------------------------------------------------------------------------")

//do-while loop
let x = 0;
do{
  console.log('hi');
  x+=1;
}while (x<10) 
console.log("-------------------------------------------------------------------------------------------")

//iterating over an object
let newObj =  {
  //key : obj[key ]
  newName: 'zayn',
  age: 34,
  occupation: 'programmer'
}

for(let key in newObj){
  console.log(`the ${key} of the object is ${newObj[key]}`);
}

