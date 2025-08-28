// 1. declare a variable called hour and assign it the value 5 then calculate and print the total number minutes and seconds present in the hour.
let hour = 5;
let minutes = hour * 60;
let seconds = minutes * 60;
let seconds1 = hour * 3600; 

console.log("hoours: " + hour);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);
console.log("seconds1: " + seconds1);


// 2. create a variable named speed1 and assign the value 36 representing speen in kilometer per hour. then convert and display this speed in meter per second. [note 1km/h = 5/18 m/s]
let speed1 = 36;
let km_m = speed1 * 1000;
let h_s = 3600;
let speed2 = km_m / h_s;

console.log("speed in km/h: " + speed1 + " km/h");
console.log("speed in m/h : " + speed2 + " m/s");