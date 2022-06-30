/*
function test(a,b){
    console.log(a+b);
}
test(3,4);
*/


/*function test(a,b,...c){
console.log(a+b);
console.log(c);
}
test(1,2,3,4,5);

let z= {name:'Richa'}
console.log(z.name);*/

function namee(){
    return('JS');
}
let a = 100;
console.log(`this is a class of ${namee()} and there are ${a} students`);

typeof(a);

for (let i = 0;i<5;i++){
    console.log(i);
}

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.age);
if(person.age<60){
    console.log(`this person is not old`);
}else{
    console.log(`this person is old`);
}