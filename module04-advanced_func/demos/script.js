/////////////////////////////
// Lecture: arguments;


// function sum(base=0,...args){
    
//     console.log(arguments);
//     console.log(args);
    
//     // for(let i=0; i<arguments.length; i++){
//     //     sum+=arguments[i];
//     // }
//     let accumalte = function(item){
//             base+=item;
//     }
//     args.forEach(accumalte);

//     return base;

// }

// function calculateAges(arr,cb){
//     let ages =[];
//     arr.forEach(function(year){
//         ages.push(cb(year));
//     });

//     return ages;
// }

// function calculateAge(year){

//     let date = new Date();
//     return date.getFullYear()-year;
// }

// console.log(sum(10,1,2,3,6));
// console.log(sum(20,1,2,3,6,78,9));

// let years=[1992,1993,2000,1984];
// console.log(calculateAges(years,calculateAge));

// function waitASecond(cb){
//     if(typeof(cb) === 'function'){
//         setTimeout(cb,1000);
//     }
//     else{
//         console.error('cb not a function');
//     }

    
// }
// waitASecond(6);
// waitASecond(function(){
//     console.log('Timeout ended');
// });
// console.log('Timeout started');





// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');


// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('jane');
// designerQuestion('Mark');
// designerQuestion('Mike');

// interviewQuestion('teacher')('Mark');

let iife =(function(){


    function foo(){
        return 1;
    }

    return {
      bar:function(){
          return foo()+5;
      },
      name:'nir'
    }


}())



console.log(iife.bar());
console.log(iife.name);
console.log(iife.foo);

/////////////////////////////
// Lecture: Passing functions as arguments
/*


/////////////////////////////
// Lecture: Functions returning functions






/////////////////////////////
// Lecture: IIFE




/////////////////////////////
// Lecture: Closures



/////////////////////////////
// Lecture: Bind, call and apply
*/