// const person = {
//     name:'nir',
//     age:10,
//     isUnder18:function under(){
//         return this.age < 18;
//     }
// }

function under(){
        return this.age < 18;
 } 
const person = new Object(); //|| {};
person.name='nir';
person['age'] = 10;
person.isUnder18 = under;

console.log(person);
console.log(person.name);
console.log(person['age']);
let fn = person.isUnder18;
console.log(fn());

person.email='nirn@sela.co.il';
console.log(person);
person.name = 'yossi';
console.log(person);





