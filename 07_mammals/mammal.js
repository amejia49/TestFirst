var Mammal= function(name,offspring)
{
	this.name=name;
	this.offspring=[];

};


Mammal.prototype.sayHello=function(string){
	
	return"My name is Joe, I'm a Mammal";
};

Mammal.prototype.haveBaby=function(name,offspring,kid){
	
	this.kid= new Mammal("Baby "+this.name);
	this.offspring.push(this.kid);
	console.log(this.kid);
	return this.kid;
};

var Cat = function (name,color,offspring){

	 Mammal.call(this,name,offspring);
	 this.color=color;

};


Cat.prototype=Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby=function(color){
	console.log(color);

	
	this.offspring.push(this);
	
	return this;

}