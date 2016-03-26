import RPi.GPIO as GPIO
import sys
from time import sleep as timeout

GPIO.setwarnings(False) ;
exec("mode = " + sys.argv[1]) ;
GPIO.setmode(mode) ;
exec("inout = " + sys.argv[3]) ;
GPIO.setup(int(sys.argv[2]),inout)
input = GPIO.input(int(sys.argv[2])) ;
while input!=int(sys.argv[4]):
	input = GPIO.input(int(sys.argv[2])) ;

print(input) ;
exit() ;