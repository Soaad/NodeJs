/* var time=0;

var timer = setInterval(() => {
    time +=2;
    console.log(time + ' sec have passed')
    if(time >5)
    clearInterval(timer);
}, 2000);



console.log(__dirname);


console.log(__filename); */


var count=require('./count');
console.log(count(['soaad','ali','ahmed']));