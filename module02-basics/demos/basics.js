var name = 'John';
var lastName = 'Newman';

console.log(name);
console.log(lastName);

function func(){

    var foo=3;
    var faz='1';
    {
        const baz=3;
        let bar=2;
        console.log('baz='+ baz);
        console.log("bar="+bar);
    }
    console.log(typeof(faz));
    console.log('foo='+foo);
    console.log('faz='+faz);
    console.log('from func ='+name + ' '+lastName);

    console.log(name+foo);

    if(foo> faz){
        console.log('foo larger then 2...');
    }
    else{
        console.log('foo smaller then 2...');
    }

    if(faz === 1){
            console.log('faz is defined');
    }   
    else{
        console.log('faz is not defined');
    }



}

func();

