
//basic example
/*var events=require('events');

var myEmitter= new events.EventEmitter

myEmitter.on('someEvent',function(msg){
    console.log(msg);
});
myEmitter.emit('someEvent','the event was emitted');*/


var events=require('events');
var util=require('util');

var Person=function(name){
    this.name=name;
}
util.inherits(Person,events.EventEmitter);

var Soaad=new Person('Soaad');
var Ali=new Person('Ali');
var Hamza=new Person('Hamza');

var people=[Soaad,Ali,Hamza];
people.forEach(function(person)
{
    person.on('speak',function(msg){
        console.log(`Hi this ${person.name} who said ${msg}`);
    })
});

Soaad.emit('speak','Hey dudes');