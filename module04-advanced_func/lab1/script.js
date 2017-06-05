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

function printArray(arr){
   var i;
   var j;
   for( i=0; i<arr.length; i++){
     j=i;
    //  (function(inx){
        setTimeout(function(){
            console.log('index '+inx+':'+arr[inx]);
        },(i+1)*1000);
    //  }(i))
   
  }
  console.log(i);
}

function printArrayES6(arr){

   for(let i=0; i<arr.length; i++){
        setTimeout(function(){
            console.log('index '+i+':'+arr[i]);
        },(i+1)*1000);
   
  }
  console.log(i);
}

printArrayES6([1,2,3,4]);



