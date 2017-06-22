function foo(num1,num2=10){
    console.log(num2);
    let num4=5;

    function sum(){
        let num3=4;
        console.log(num4);
        return num1+num2; 


    }
    
    //console.log(num3);

    return sum();
    
}


let sum = foo(1);
console.log(sum);

//let arr=[1,2,3,4];
let arr = new Array(1,2,3,4,'5');
console.log(typeof(arr));
console.log(arr);
console.log(arr[1]);
console.log(arr[6]);

arr.push(7);
console.log(arr);

arr.unshift(9);
console.log(arr);

console.log(arr.pop()+' '+arr);
console.log(arr.shift()+' '+arr);

arr[10]=10;
console.log(arr);

let inx = arr.indexOf(3);
if(inx>=0){
    arr.splice(inx,1);
}
console.log(arr);

for(let i=0; i<arr.length;i++){
    if( arr[i] !== undefined ){
        console.log('item '+ i +':'+arr[i]);
    }    
}

arr.forEach(function(item,inx,arr){
    console.log('item '+' '+item+', '+inx+ 'of '+arr.length);
});
let num;
console.log( num || 28 );
let str='12';
console.log( typeof(parseInt(str)) );

console.log( typeof(parseInt('sdfsdfsd')) );
console.log( isNaN(parseInt('sdfsdfsd')) );
console.log( typeof(+str) );

let num1;
console.log( num1 );
console.log( !!num1 ); 

