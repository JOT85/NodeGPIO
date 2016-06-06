# NodeGPIO
Raspberry PI GPIO in Node.js
<br><br>
This enables you to use the Raspberry Pi's GPIO ports in Node.js.

<br>It is still being updated & is not done yet, but should work stablally.
<br><br>
To use:<br>
<code>
	let GPIO = require("./NodeGPIO.js") ;
	//This will setup GPIO21 as a input.
	let myInput = new GPIO(21,"in") ;
	//This will setup GPIO20 as an output.
	let myOutput = new GPIO(20,"out") ;

	//Get the input value of the input we set up earlier.
	let myInputValue = myInput.input() ; //This will be either 0 or 1

	//This will output a high signal to output 20
	myOutput.output(1) ;

	//This will wait for 5 seconds
	require("child_process").execSync("sleep 5") ;

	//We must unexport the GPIO, if we do not, then we will not be able to use them again after we close this programme unless we reboot the system...
	myInput.unexport() ;
	myOutput.unexport() ;
</code>
<!--
<br>I have tried to add all of the fetured however it is not yet done yet. Here is what I have so far:
<br>
<ul>
<h3>Stuff that I have added for handy usage</h3>
<li>GPIO.when(channel,input,function to do) - This will wait for the specified chanel to be either high or low (as specified by the second argument) & then call the specified function with an argument given which is the value that the inout now is.</li>
<li>GPIO.onchange(channel,function to do,wether to repeat when changed again) - This will call the funtion specified whenever the chanel changes input.</li>
<h3>Standard:</h3>
<li>GPIO.setmode(mode) - Can be GPIO.BOARD or GPIO.BCM - Sets the pin numbering system - Read more <a href="https://sourceforge.net/p/raspberry-gpio-python/wiki/BasicUsage/">here</a></li>
<li>GPIO.getmode() - Coming soon</li>
<li>GPIO.setwarnngs()</li>
<li>GPIO.setup(channel,GPIO.IN/GPIO.OUT) - Sets up the specified chanel as an input or an output - Read more <a href="https://sourceforge.net/p/raspberry-gpio-python/wiki/BasicUsage/">here</a></li>
<li>GPIO.input(channel) - Returns 1 (of input it high) or 0 (if input is low) - Read more <a href="https://sourceforge.net/p/raspberry-gpio-python/wiki/BasicUsage/">here</a></li>
<li>GPIO.cleanup() - Coming soon</li>
<li>Board infomation - Coming soon</li>
</ul>
-->