"use strict" ;

class GPIO {
	
	constructor (IO,direction) {
		
	this.fs = require("fs") ;
	this.dir = "/sys/class/gpio" ;
	
	if (String(parseInt(IO)) !== String(IO)) {
		
		throw "GPIO Number mist be a number..." ;
		
	}
	
	if (direction !== "in" && direction !== "out") {
		
		throw `${direction} is not a valid direction ("in" or "out")`
		
	}
	
	this.IO = IO ;
	this.direction = direction ;
	
	this.fs.writeFileSync(`${this.dir}/export`,String(IO)) ;
	this.fs.writeFileSync(`${this.dir}/gpio${IO}/direction`,direction) ;
	
	
	this.input = () => {
		
		return parseInt(this.fs.readFileSync(`${this.dir}/gpio${this.IO}/value`).toString()) ;
		
	} ;
	
	this.output = (value) => {
		
		if (this.direction === "in") {
			
			throw "Cannot output to an input!" ;
			
		}
		
		if (value !== 0 && value !== 1) {
			
			throw "Output must be a high or low signal." ;
			
		}
		
		this.fs.writeFileSync(`${this.dir}/gpio${this.IO}/value`,String(value)) ;
		return value ;
			
	} ;
	
	this.unexport = () => {
		
		this.fs.writeFileSync(`${this.dir}/unexport`,String(this.IO)) ;
		
	} ;
	
	}
	
}

module.exports = GPIO ;
