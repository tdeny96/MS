<html>
    <head>
        <meta charset="utf-8" />
        <title>Raspberry Pi - Camera rotate</title>
    </head>
 
    <body style="background-color: white;">
	<center>
	<img height="480" width = "640" src="http://192.168.100.17:8081" />
	<br>
	<button id="myP" onmousedown="mouseDown(02)" onmouseup="mouseUp(02)">Backward</button>
	<button id="myP" onmousedown="mouseDown(03)" onmouseup="mouseUp(03)">Turn right</button>
	<button id="myP" onmousedown="mouseDown(34)" onmouseup="mouseUp(34)">Forward</button>
	<button id="myP" onmousedown="mouseDown(24)" onmouseup="mouseUp(24)">Turn left</button>
	<br>

<!------------------------------------------------ php -->
<?php
	//set the GPIO0, GPIO 2, GPIO3, GPIO4 mode to output
	system("gpio mode 0 out");
	system("gpio write 0 0");
	system("gpio mode 2 out");
	system("gpio write 2 0");
	system("gpio mode 3 out");
	system("gpio write 3 0");
	system("gpio mode 4 out");
	system("gpio write 4 0");
	

	//-----update button status
	$output = shell_exec("cat temp");
	if ($output ==0) {
		echo ("<img id='status' height=48 width = 120 src='data/ON.png'/>");
	}
	else {
		echo ("<img id='status' height=48 width = 120 src='data/OFF.png'/>");
	}	
?>

	</center>
	 
<!------------------------------------------------ javascript -->
<script src="camera.js"></script>

    </body>
</html>


