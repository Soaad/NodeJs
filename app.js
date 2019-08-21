/* var time=0;

var timer = setInterval(() => {
    time +=2;
    console.log(time + ' sec have passed')
    if(time >5)
    clearInterval(timer);
}, 2000);



console.log(__dirname);


console.log(__filename); */


var stuff=require('./stuff');
console.log(stuff.counter(['soaad','ali','ahmed']));

console.log(stuff.adder(2,89));
console.log(stuff.pi);