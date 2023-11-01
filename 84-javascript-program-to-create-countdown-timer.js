// const prompt = require('prompt-sync')();

/* 
To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Math floor()
JavaScript Date and Time
Javascript setInterval()

*/

// =============================== && Solution && ==================================
// let countDownDate = new Date('Nov 1, 2023 18:22:36').getTime() 
let countDownDate = new Date().getTime()+ 24 * 60 * 60 * 1000;
setInterval(()=> {
    let now = new Date().getTime()
    
    let timeLeft = countDownDate - now;
    
    const days = Math.floor(timeLeft / (1000*60*60*24))
    const hours = Math.floor((timeLeft / (1000*60*60)) % 24)
    const minutes = Math.floor((timeLeft / 1000/60 % 60))
    const seconds = Math.floor((timeLeft / 1000) % 60)
    
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    if(timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }

},2000)

// =============================== && Solution && ==================================

/* 
Output

0d 23h 59m 57s 
0d 23h 59m 55s 
0d 23h 59m 53s 
0d 23h 59m 51s 
...
In the above program, the setInterval() method is used to create a timer.

The setInterval() method is executed at a given interval time (here, 2000 milliseconds).

The new Date() gives the current date and time. For example,

let d1 = new Date();
console.log(time); // Fri Aug 28 2020 09:19:40 GMT+0545 (+0545)
The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date (here, current date).

The following code gives the next day's time in milliseconds.

new Date().getTime() + 24 * 60 * 60 * 1000;
Now, we can calculate time left using the following formula:

let timeLeft = countDownDate - now;
The remaining number of day is calculated using:

The time interval is divided by 1000 to determine the number of seconds, i.e. timeLeft / 1000
The time interval then is divided by 60 * 60 * 24 to determine the number of days remaining.
The Math.floor() function is used to round the number to a whole number.
Similar methods are used for hours, minutes, and seconds.

*/