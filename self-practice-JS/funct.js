//normal function
function hello(name) {
    console.log(`hello ${name}`);
}

hello('saniya');


//function expression 
const sayhello = function hi(name2){
    console.log(`i am saying hi to ${name2}`);
}

sayhello('farzin');

//function inside an obj
const myobj = {
    newname:'bob',
    branch: function(){
        return "IT"
    }
}

console.log(myobj.branch());

arr = ['x', 'r', 'w', 'q', 'k'];
arr.forEach(function(element, index){
    console.log(element, index);
});