function Loops(){
	var repeat= repeat;
	var sum   = sum;
	var gridGenerator = gridGenerator;
	var largestTriplet= largestTriplet;
	var paramify= paramify;
}
function repeat(string,num){
	if (num==0){
		return "";
	}else if (num==1){
		return string;
	}else{
	for (var i=1; i<num; i++){

		string+="yo";
	}
	console.log(string);
	return string;
}
}

function sum(array){
	var total=0;
	if (array==undefined){
		return total;
	} else
	for (var i=0; i<array.length; i++){
		total+=array[i];
	}
	return total;

}

function gridGenerator(num){
	var string="";

	for(var i=0; i<num; i++){

for (var j=0; j<num; j++){
	
		if((i+j) % 2 === 0){
			string+="#";
		}else{
			string+=" ";
		}
		
		}
		string+="\n";
		
	}
	return string;
}


function join(array,del){

	// created empty string

	var string="";

	//check if array is undefined
	if (array==undefined)
	{
		return "";
	} else if(del==undefined)
	{
	for(var i=0;i<array.length; i++)
	{
		string+=array[i];
	}
	return string;
} 

//check if there is a second parameter
else {
		for(var i=0;i<array.length; i++)
		{
		console.log(string);

//created if function to remove delimeter if the last index is coming up
		if (i <array.length-1){
		string+=array[i]+'/';} else {
			string +=array[i];
		}


	}
	return string; }
  
}

function largestTriplet(num){

	var largestArray=[];
	
for (var a=1; a<num*num; a++){
	for (var b=1; b<num*num; b++){
		if ((a*a)+(b*b)==(num*num))
		{
			if (largestArray){
			   
				largestArray=[b,a,num];
			} else if (a>largestArray[a]&&b>largestArray[b]){
				largestArray=[b,a,num];
			}

		}
	}
	   
}
if(largestArray.length===0){
    num=num-1;
    console.log(num);
   return largestTriplet(num);
}
 return largestArray;
    
}


function paramify(prop){
    
	var object={};
	object.key=prop;
	console.log(object.key);
	for (var i in object){
	    
	}
	return object;
}
