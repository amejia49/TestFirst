function RPNCalculator(){
	// this = {}
	 this.array=[];
	 // return {array: []}
}



	
	RPNCalculator.prototype.push = function(num){
		this.array.push(num);

	}

	RPNCalculator.prototype.plus = function(array) {
		var sum= this.array[1] +this.array[2];
		this.array.push(x);
	}

	RPNCalculator.prototype.minus = function(array) {
		var sum= this.array.[1] -this.array.[2];
		this.array.push(x);
	}

	RPNCalculator.prototype.divide = function(array) {
		var sum= this.array.pop()/this.array.pop();
		this.array.push(x);
	}

	RPNCalculator.prototype.value = function() {

		return this.array[this.array.length -1];
	}
	
	}
	


