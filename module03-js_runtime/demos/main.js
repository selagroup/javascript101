///////////////////////////////////////
// Lecture: Hoisting
// 'use strict';
var foo=10;
function sum(num1,num2){
    var num4;
    print(num1);
    print(num2);

    var num4 = num3 + 7;
    var num3 = 6;
    print(num3);
    print(num4);
    var num6=34;
     
    //  if(true){
    //      var num5=8;
    //      let num6=10;
    //      console.log(num6)
    //      console.log(num5)
    //  }
    //  console.log(num6)
    //  console.log(num5)
    
    function print(num){
        //  num5=num6;
        //  console.log('num5='+num5);

        console.log(num3,num4);
        console.log(num);
    }

    // var print=5;
    // print(8);
    
    

}
sum(1,2);
// console.log('num 5 from global'+num5);

let person = {
    name:'nir',
    sayHello:function(){
        console.log('Hello '+this.name);
    }
}
let person2= {
    name:'yossi',
    sayHello:person.sayHello
}
person.sayHello();
person2.sayHello();
var name='avi';
let fn = person.sayHello;
fn();


















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









