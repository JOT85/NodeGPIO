var cp = require("child_process") ;
var GPIOset = {
	
	"mode" : "GPIO.BOARD" ,
	"setups" : {}
	
} ;

module.exports = {
	
	"BOARD" : "GPIO.BOARD" ,
	"BCM" : "GPIO.BCM" ,
	"OUT" : "GPIO.OUT" ,
	"IN" : "GPIO.IN" ,
	
	"setmode" : function (mode) {
		
		if (mode !== "GPIO.BOARD" && mode !== "GPIO.BCM") {
			
			throw "Invalid GPIO mode!" ;
			
		}
		
		else {
			
			GPIOset.mode = mode ;
			return true ;
			
		}
		
	},
	
	"setwarnings" : function () {} ,
	
	"setup" : function (IO,IOQ) {
		
		if (typeof IO === "object") {
			
			doing = 0 ;
			while (doing !== IO.length) {
				
				GPIOset.setups[String(IO[doing])] = IOQ ;
				doing++ ;
				
			}
			return true ;
			
		}
		
		else {
			
			GPIOset.setups[String(IO)] = IOQ ;
			return IOQ ;
			
		}
		
	} ,
	
	"input" : function (IO) {
		
		if (typeof GPIOset.setups[String(IO)] === "undefined") {
			
			throw `GPIO ${IO} not set up. Use GPIO.setup(${IO},type) to set up.`
			
		}
		
		return parseFloat(cp.execSync(`sudo python3 -c "import RPi.GPIO as GPIO ; GPIO.setwarnings(False) ; GPIO.setmode(${GPIOset.mode}) ; GPIO.setup(${IO},${GPIOset.setups[String(IO)]}) ; result = GPIO.input(${IO}) ; print(result) ;"`).toString().replace("\n","")) ;
		
	} ,
	
	"output" : function (IO,highorlow) {
		
		if (highorlow === true) {
			
			highorlow = "True" ;
			
		}
		
		else if (highorlow === false) {
			
			highorlow = "False" ;
			
		}
		
		if (GPIOset.setups[String(IO)] !== "GPIO.OUT") {
			
			throw `GPIO ${IO} is not an output!` ;
			
		}
		
		cp.execSync(`sudo python3 -c "import RPi.GPIO as GPIO ; GPIO.setwarnings(False) ; GPIO.setmode(${GPIOset.mode}) ; GPIO.setup(${IO},${GPIOset.setups[String(IO)]}) ; GPIO.output(${IO},${highorlow}) ;"`).toString().replace("\n","") ;
		
		return highorlow ;
		
	} ,
	
	"when" : function (pin,highorlow,doFunction) {
		
		/*if (typeof repeat === "undefined") {
			
			repeat = false ;
			
		}
		
		if (repeat === true) {
			
			cp.exec(`sudo python3 wait.py ${GPIOset.mode} ${pin} ${GPIOset.setups[String(pin)]} ${highorlow}`,() => {
				
				this.wait(pin,highorlow,doFunction,repeat) ;
				doFunction() ;
				
			}) ;
			
		}
		
		else {*/
			
			cp.exec(`sudo python3 wait.py ${GPIOset.mode} ${pin} ${GPIOset.setups[String(pin)]} ${highorlow}`,doFunction) ;
			
		//}
		
	},
	
	"onchange" : function (pin,doFunction,repeat) {
		
		var listenFor = Number(!this.input(pin)) ;
		
		if (typeof repeat === "undefined") {
			
			repeat = false ;
			
		}
		
		if (repeat === true) {
			
			this.when(pin,listenFor,() => {
				
				this.onchange(pin,doFunction,repeat) ;
				doFunction(listenFor) ;
				
			}) ;
			
		}
		
		else {
			
			this.when(pin,listenFor,()=>{doFunction(listenFor);}) ;
			
		}
		
	},
	
	"v":1603242052
	
} ;