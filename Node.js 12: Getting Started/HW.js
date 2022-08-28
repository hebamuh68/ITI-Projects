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

//=========================================
/* Challenge 2:

  Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.

  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...

  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement */

const greeting = delay =>
    setTimeout(() => 
    {
        for (var i = 0; i < 5; i++) 
        {
            console.log('Hello World. ' + delay);
        }
        greeting(delay + 100);
    }, delay );

greeting(100);

//=================================

let lastIntervalId, counter = 5;

const greeting = delay => {
  if (counter === 5) 
  {
    clearInterval(lastIntervalId);

    lastIntervalId = setInterval(() => 
    {
      console.log('Hello World. ' + delay);
      greeting(delay + 100);
    }, delay);
    
    counter = 0;
  }

  counter += 1;
};

greeting(100);
