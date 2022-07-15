let prac = "i am practicing JS" + " " + "i am revising";
prac = prac.concat(this);
console.log(prac);

console.log(prac.length);
console.log(prac.toUpperCase());
console.log(prac.indexOf('am'));
console.log(prac.lastIndexOf('i'));
console.log(prac.endsWith('saniya'));
console.log(prac.startsWith('r'));
console.log(prac.substring(5,8));
console.log(prac.replace("am" , "was"));

let newName  = 'saniya';
let favPlace = 'mumbai';
let favPlace2 = 'dubai';
let myPrac = `hello! ${newName}. Welcome! here are your 2 fav destinations: ${favPlace}, ${favPlace2}`;

console.log(myPrac);