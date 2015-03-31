function setPropertiesOnObjLiteral(obj){
	obj.x=7;
	obj.y=8;
	obj.onePlus=onePlus;
}
function onePlus(par){
	return par=par+1;
}

function setPropertiesOnArrayObj(obj){
	obj.hello= hello;
	obj.full="stack";
	obj[0]=5;
	obj.twoTimes=twoTimes;
}
 function hello(){
 	return "Hello!";
 }

 function twoTimes(par){
   return par*2;
 }

 function setPropertiesOnFunctionObj(obj){
  obj.year=2015;
  obj.divideByTwo=divideByTwo;
  obj.prototype.helloWorld=helloWorld;
 }
 function divideByTwo(par){
 	return par/2;
 }

 function helloWorld(){
 	return "Hello World";
 }