function createCalculator(){
	var counter = 0;
	this.value = function(){
		return counter;

	}

	this.add = function(par) {
		counter=counter+par;
	}

	this.subtract = function(par) {
		counter=counter-par;
	}
	return this;
}


