function Person(name,email){
    this.name=name;
    this.email = email;
}
Person.prototype = {
    sayHello:function(){
        console.log('Hi '+this.name);
    },
    sayGoodbye:function(){

    }
}

let p1 = new Person('nir','nirn@sela.co.il');
let p2 = new Person('yossi','asdlkjasd@sela.co.il');


// new object - personObj={}
// personObj.[[prototype]] = Person.prototype
// Person.call(obj);
// return obj;

console.log(p1);
console.log(p2);
p1.sayHello();
p2.sayHello();

Person.prototype.sayHello=function(){
    console.log('Hola '+this.name);
}
p1.sayHello();
p2.sayHello();

function Student(name,email,courses,_dep){
    this.courses = courses;
    this._dep = _dep;
    Person.call(this,name,email);
}

Student.prototype = Object.create(Person.prototype,{
    department:{
        // get:function(){
        //     return this._dep || 'no department';
        // },
        // set:function(value){
        //     this._dep = value;
        // },
        enumerable:true,
        writable:false,
        value:'Math',
    }
});


Student.prototype.constructor = Person;

Student.prototype.printCourses = function(){

    this.courses.forEach((item)=>{
        console.log(item);
    })
}


let s1= new Student('haim','haim@sela.co.il',['math','latin']);
s1.sayHello();
s1.printCourses();
console.log('dep '+s1.department);
s1.department = 'Math';
console.log('dep '+s1.department);
console.log('*********************************************************');
for(let key in s1){
   console.log(key);
   
    if(s1.hasOwnProperty(key)){
        console.log(s1[key]);
    }
    console.log(s1['department']);
}
console.log('*********************************************************');









