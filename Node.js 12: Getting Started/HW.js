// print hello after 4 sec, and then after 8 sec

const theOneFun = delay => {
    console.log("hello after " + delay + ' Secs');
};

setTimeout(theOneFun, 4*1000, 4);
setTimeout(theOneFun, 8*1000, 8);


//=========================================
// print every 3 sec forever

setInterval(
    () => console.log("hi every 3 sec"),
    3000
);


//=========================================
// print hello world every sec for only 5 times

let counter = 0;
const intervalid = setInterval(() => {

    console.log("Hello world");
    counter +=1;

    if (counter === 5){
        console.log("DOne");
        clearInterval(intervalid);
    }
}, 1000);

//=========================================
/* Challenge 1:

  Print "Hello World" forever. Starting with a delay of 1 second
  but then incrementing the delay by 1 second each time.
  The second time will have a delay of 2 seconds
  The third time will have a delay of 3 seconds.

  Include the delay in the printed message
  Hello World. 1
  Hello World. 2
  Hello World. 3
  ...

  Constraints: You can only use const (no let or var) */

const greeting = delay =>
    setTimeout(() => 
    {
        console.log('Hello World. ' + delay);
        greeting(delay + 1);
    }
    , delay * 1000);

greeting(1);
