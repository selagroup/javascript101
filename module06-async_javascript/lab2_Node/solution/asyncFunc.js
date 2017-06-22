
module.exports.parallel = (promises) =>{
    return Promise.all(promises)
}
async function series(funcs){
    
    let result=[];
    for(i=0; i<funcs.length; i++){
        result.push(await funcs[i]());
    };
    return result;   
}

let id=0;
function RandomTimer(){
    
    id++
    let rand=(Math.random() * 5)*1000;
    console.log(rand);
    return new Promise((resolve,reject)=>{
        setTimeout((id)=>{
            console.log(id);
            resolve(id);            
        },rand,id);
    });
}


//  series([
//         RandomTimer,
//         RandomTimer,
//         RandomTimer
//     ]).then((results)=>{
//         console.log(results);
//     },(err)=> console.log(err));



seriesPromise([
    RandomTimer,
    RandomTimer,
    RandomTimer
]).then((result)=>{
    console.log(result);
})
