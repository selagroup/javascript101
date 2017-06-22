
function sum(a,b=6,...args){

    console.log(arguments);
    console.log(args);
    console.log('b='+b);

    let acc=0;
    for(let i=0; i<arguments.length; i++){
        acc+=arguments[i];
    }

    return acc;
}


console.log(sum(1,2,3,4,5));
console.log(sum(8));


function waitASecond(cb){
    setTimeout(cb,1000);
}

function timeOut_cb(){
    console.log('Timeout ended');
};
waitASecond(timeOut_cb);

function createSum(a,b){
   
    let fn =function(c,d){
        return a+b+c+d;
    }; 

    return fn; 
}

let sumFunc = createSum(4,5);

console.log(sumFunc(6,8));
console.log(sumFunc(1,2));

let obj = (function(){

    let prefix='Hello';
    let farewell_perfix = 'bye';

    let o={
        greet:function(name){
            return prefix +' '+name;
        },
        farewell:function(name){
            return farewell_perfix +' '+name;
        }
    }

    return o;

}());

console.log(obj);
console.log(obj.greet('nir'));

let arr = new Array();

let person = {
     name:'nir noy',
     email:'nirn@sela.co.il',
     sayHello:function(suffix=''){

         console.log(arguments);
         let args = Array.prototype.slice.call(arguments);
         console.log(args);
         return 'Hi '+this.name+' '+suffix;
     }
 }
 let teacher = {
     name:'Yossi cohen',
     email:'nirn@sela.co.il'
 };

 console.log(person.sayHello('213'));
 console.log(person.sayHello.call(teacher,'54645'));
 console.log(person.sayHello.apply(teacher,['dfkjk']));


let counter = (function(){

    let start_count=0;
    let end_count =0;
    let tickContext=null;

    function init(start,end,onTick=count=>console.log(count),onTickContext){

        start_count=start;
        end_count=end;
        tickContext = onTickContext;
        timeout(onTick);

    }

    function timeout(cb){
        
        
        setTimeout(function(){
            start_count++;
            

            //cb.call(tickContext,start_count);
            
            //with bind
            cb(start_count);

            if(start_count<end_count){
                timeout(cb);
            }
        },1000)
    }

    return init;

}());

// counter(0,5,function(count){
//     console.log(count);
// });


let myCounter={

    myCount:0,

    start:function(){

        let fn = this.increment.bind(this);
        //counter(0,5,fn);
        counter(0,5,(count) => {
            this.increment(count)
        });
    },
    increment:function(count){
        console.log(count);
        this.myCount=count;
    }
}

myCounter.start();
setTimeout(function(){
    console.log('my Counter: '+ myCounter.myCount);
},6000);

function sayHello(job,name){

    console.log('Hello my name is '+name +' and i am a '+job);
}


sayHello('teacher','nir');
let sayHelloToTeacher = sayHello.bind(null,'teacher');
let sayHelloToDesigner = sayHello.bind(null,'designer');
sayHelloToTeacher('nir');
sayHelloToDesigner('yossi');

let func = (name) => {
    console.log('Hi '+name);
}

let sumArrow = (a,b) => a+b;

let toUpper = str => str.toUpperCase();


func('nir');
console.log(sumArrow(1,2));
console.log(toUpper('nir'));















