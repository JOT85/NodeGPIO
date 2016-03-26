# NodeGPIO
Raspberry PI GPIO in NodeJS
<br><br>
This enables you to use the Raspberry Pis GPIO ports in NodeJS.
<br>I have tried to add all of the fetured however it is not yet done yet. Here is what I have so far:
<br>
<ul>
<h3>Stuff that I have added for handy usage</h3>
<li>GPIO.when(channel,input,function to do) - This will wait for the specified chanel to be either high or low (as specified by the second argument) & then call the specified function with an argument given which is the value that the inout now is.</li>
<li>GPIO.onchange(channel,function to do,wether to repeat when changed again) - This will call the funtion specified whenever the chanel changes input.</li>
<h3>Standard:</h3>
<li>GPIO.setmode(mode) - Can be GPIO.BOARD or GPIO.BCM - Sets the pin numbering system - Read more <a href="https://sourceforge.net/p/raspberry-gpio-python/wiki/BasicUsage/">here</a></li>
<!--<li>GPIO.getmode() - Coming soon</li>-->
<li>GPIO.setwarnngs()</li>
<li>GPIO.setup(channel,GPIO.IN/GPIO.OUT) - Sets up the specified chanel as an input or an output - Multiple chanel setup is not yet supported - Read more <a href="https://sourceforge.net/p/raspberry-gpio-python/wiki/BasicUsage/">here</a></li>
<li>GPIO.input(channel) - Returns 1 (of input it high) or 0 (if input is low) - Read more <a href="https://sourceforge.net/p/raspberry-gpio-python/wiki/BasicUsage/">here</a></li>
<li>GPIO.cleanup() - Coming soon</li>
<li>Board infomation - Coming soon</li>
</ul>
