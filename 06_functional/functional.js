// 06_Functional 
function doubler(number){
    console.log(number)
	return number*2;
}

function map(numbers,doubler){
  

	var newArray= numbers.map(doubler);
	return newArray;
}

function filter(array,newFunc){
	var newArray=array.filter(newFunc);
	return newArray;

}

function contains(array,num){
	
	return array.contains(num);
}

function countWords(string){
	var array=string.split(' ');
	return array.length;
}

function reduce(array,startPoint,newFunc){
     
 	var sum= array.reduce(newFunc);
	return sum;
}

function every(array,newFunc){

return  array.every(newFunc);
}

function any(array, newFunc){
	return  array.every(newFunc);

}