class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    sayHello(){
        console.log('Hi '+ this.name);
    }
}

class Student extends Person{

    constructor(name,email,courses){
        super(name,email);
        this.courses = courses;
    }

    printCourses(){
        this.courses.forEach((item)=>{
                console.log(item);
        });
    }


}

let p1 = new Person('nir','nirn@sela.co.il');
let cb = p1.sayHello;
Person.prototype.sayHello = function(){
     console.log('Hello '+ this.name);
}
p1.sayHello();
console.log(Person);
// setTimeout(p1.sayHello,1000);
p1.sayHello();

let s1 = new Student('yossi','yossi@sdks.com',['Math','Latin']);
s1.printCourses();
s1.sayHello();

console.log('********** merge **********');

let obj ={a:1,b:2, arr:[1,2,3,4] };
let newObj = Object.assign({e:7},obj,{b:3,d:4});
console.log(newObj);

let deepObj = JSON.parse(JSON.stringify(obj));
console.log(deepObj);

function fetch(options){
   let  _defaultOptions={
        url:'http://sdffdsf.com',
        method:'GET'
    }

    let _options = Object.assign(_defaultOptions,options);

    ///
    
    ///
}


