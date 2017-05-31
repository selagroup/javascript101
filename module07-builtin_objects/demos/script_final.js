/////////////////////////////
// Lecture: Date Object

console.log(new Date());
console.log(new Date("2/16/2002"));
console.log(new Date(34, 5, 17));
console.log(new Date(3000));

var now= new Date();
console.log(now.getDate());
console.log(now.getDay()+1);
console.log(now.getMonth()+1);
console.log(now.getFullYear());
console.log(now.getTime());

/////////////////////////////
// Lecture: Strings

function generateUrl (category,id){
    console.log(`http://apiserver/${category}/${id}`);
}

generateUrl('automotive',34);


////////////////////////////////
// Lecture: Array

let arr = ['nir','yossi','haim','gil','ofer']

arr.forEach((item,inx,arr)=>{
    console.log(`${item}, ${inx+1} of ${arr.length}`);
});

console.log(...arr);
console.log(['Dror','Oz',...arr]);

let upperArr = arr.map((item)=> item.toUpperCase());
console.log(...upperArr); 


var name = 'nir noy';

var upper = name.split(' ') // [shane, osbourne]
    .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
    .join(' ');

console.log(upper);
const items = [
    {
        active: false,
        firstname: 'Michael',
        lastname: 'Jordan'
    },
    {
        active: false,
        firstname: 'Kobe',
        lastname: 'Bryant'
    },
    {
        active: true,
        firstname: 'LeBron',
        lastname: 'James'
    }
];

const mapped = items
    .filter(x => x.active) //
    .map(x => x.firstname); 

console.log(createHtmlList(mapped));

function createHtmlList(items) {
    const listElements = items.map(x => <li>${x}</li>).join('\n');
    return <ul>\n${listElements}\n</ul>;
}







