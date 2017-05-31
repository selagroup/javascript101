/////////////////////////////
// CODING CHALLENGE


/*
  1.write a function that accpets an array and prints out it's items in incremental timeouts
    example:[1,2,3,4]
    after 1 sec : 1
          2 sec : 2
          3 sec : 3
          4 sec : 4

    Try implementing this twice: once es5 compatible and once for es2015.
           
*/

//es5
//  function printInTimeouts(arr){

//         for(var i=0; i<arr.length;i++){
//             (function(inx){
//                 setTimeout(()=>{ 
//                     console.log(arr[inx]);
//                 },(i+1)*1000);
//             })(i);
//         }
//  }

 //es6
//   function printInTimeouts(arr){

//         for(let i=0; i<arr.length;i++){
//                 setTimeout(()=>{ 
//                     console.log(arr[i]);
//                 },(i+1)*1000);
//         }
//  }

//  printInTimeouts([1,2,3,4,5,6]);



