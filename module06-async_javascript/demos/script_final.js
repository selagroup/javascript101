/////////////////////////////
// Lecture: creating promises.

function drawEvenNumber(){
   
   let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let number=Math.round(Math.random()*100); 
            if(number % 2 === 0){
                resolve(number);
            }
            else{
                reject(new Error(`${number} not an even number`));
            }
        },1000)
   });

   return promise;
}

// drawEvenNumber()
//     .then((number)=>console.log(number),
//         (error)=> console.error(error)
//     );

/////////////////////////////
// Lecture: chaning promises.


// drawEvenNumber()
//     .then((number)=>{
//             console.log(number);
//             return drawEvenNumber();
//         },
//         (error)=> {
//             console.error(error);            
//         }
//     )
//     .then((number)=>console.log(number),
//         (error)=>console.error(error));


/////////////////////////////
// Lecture: catch promises.

drawEvenNumber()
    .then((number)=>{
            console.log(number);
            return drawEvenNumber();
        }
    )
    .then((number)=>console.log(number))
    .catch((error)=>console.error(error));

/////////////////////////////
// Lecture: promise.all/.race

function drawNumber(limit,timeout){
   
   let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let number=Math.round(Math.random()*100); 
            if(number<limit){
                resolve(number);
            }
            else{
                reject(number);
            }
            
        },timeout)
   });

   return promise;
}
let promises =[
    drawNumber(99,1000),
    drawNumber(99,2000),
    drawNumber(99,3000)
];


Promise.all(promises)
    .then((result)=> console.log(result))
    .catch((error)=> console.error(error));


Promise.race(promises)
    .then((result)=> console.log(result))
    .catch((error)=> console.error(error));
