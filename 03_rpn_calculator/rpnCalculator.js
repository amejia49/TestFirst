function RPNCalculator(){

	 var this.array=[];
	
	this.prototype.push = function(num){
		this.array.push(num);

	}

	this.prototype.plus = function(array) {
		var sum= this.array[1] +this.array[2];
		this.array.push(x);
	}

	this.prototype.minus = function(array) {
		var sum= this.array.[1] -this.array.[2];
		this.array.push(x);
	}

	this.prototype.divide = function(array) {
		var sum= this.array.pop()/this.array.pop();
		this.array.push(x);
	}

	this.prototype.value = function() {

		return this.array[this.array.length -1];
	}
	
	}
	


