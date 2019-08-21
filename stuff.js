var counter=function(arr){
    return 'there are '+arr.length+' elements';
}
var adder=function(a,b){
    return `the sum of 2 number is ${a+b}`
}
var pi=3.14

module.exports.counter=counter;

module.exports.adder=adder;
module.exports.pi=pi;