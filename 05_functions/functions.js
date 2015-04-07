// Functions.js
function concat_string(){
	 var word="";
	 for (var i=0; i<arguments.length; i++){
	 	word+=arguments[i];
	 }
	 return word;
}

function yourFunctionRunner(){
    var string="";
	for (var i=0; i<arguments.length;i++){
	    
	    
	    string+=arguments[i]();
	}
    return string;
}

function makeAdder(a){
	var add= function (b){
	return	a + b;
	 };
	 return add;
}

function once (param){
  var counter = 0;
  function add(){
    if (counter === 0){
    counter++;
    return param();
    }
  }
  return add;
}

function createObjectWithTwoClosures(){
	var num=0;
	var newObj={
		oneIncrementer: function(){
             return num+1;
		},
		tensIncrementer: function(){
		    return num+10;
		},
		getValue: function(){
		     return newObj.oneIncrementer()+newObj.tensIncrementer();
		}
	};
    return newObj;
}
