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