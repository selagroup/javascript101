/****** Run in node >=7.6  ********/

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

async function randomNum(){
    let num = await drawNumber(99,1000);
    console.log(num);
    return num;
}

async function randomSum(){
    let sum = await randomNum() + await randomNum() + await randomNum();
    console.log(sum);
}
//randomNum();
randomSum();