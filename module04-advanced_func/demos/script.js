/////////////////////////////
// Lecture: Passing functions as arguments
/*


/////////////////////////////
// Lecture: Functions returning functions




/////////////////////////////
// Lecture: IIFE




/////////////////////////////
// Lecture: Closures


*/
/////////////////////////////
// Lecture: Bind, call and apply

let intervalCounter= (function(){
    
    let countStart = 0;
    let countEnd;
    let interval_cb;
    let interval_cb_context;
    
    function initCounter(start,end,onInterval,onIntervalContext){

        countStart=start;
        countEnd=end;
        interval_cb = onInterval;
        interval_cb_context=onIntervalContext;
        timeout();
    }
    
    function timeout(){
        

        setTimeout(()=>{
            countStart++;
            interval_cb.call(interval_cb_context,countStart);
            if(countStart<countEnd){
                timeout();
            }

        },1000 )

    }
    return initCounter;
}());

let myCount={
    currentCount:0,
    start:function(){
        intervalCounter(0,5,this.increment,this);
    },
    increment:function(count){
        console.log(count);
        this.currentCount=count;
    }
}

myCount.start();
setTimeout(()=>{
    console.log(myCount.currentCount);
},6000)