var status_button = document.getElementById("status");


function mouseDown(pin) {
 	var data = 0;

	var request = new XMLHttpRequest();
	//send state&pin to camera_rotate.php
	request.open( "GET" , "camera_rotate.php?rotate=1&pin="+pin, true); 
	request.send(null);
	//receiving informations
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = request.responseText;		
			
			if ( data==1 ){
				status_button.src = "data/OFF.png";
			}
			else if ( data == 0 ) {
				status_button.src = "data/ON.png";
			}
			else if ( !(data.localeCompare("fail"))) {
				alert ("Output is neither 0 nor 1 nor fail" );
				return ("fail");			
			}
			else {
				alert ("Something went wrong!! "+data );
				return ("fail"); 
			}
		}
		//if fail
		else if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		}
		//else 
		else if (request.readyState == 4 && request.status != 200 && request.status != 500 ) { 
			alert ("Something went wrong!");
			return ("fail"); }
	}	
	return 0;
}

function mouseUp(pin) {
	var data = 0;

	var request = new XMLHttpRequest();
	//send state&pin to camera_rotate.php
	request.open( "GET" , "camera_rotate.php?rotate=0&pin="+pin, true);
	request.send(null);
	//receiving informations
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = request.responseText;		
			
			if ( data==1 ){
				status_button.src = "data/OFF.png";
			}
			else if ( data == 0 ) {
				status_button.src = "data/ON.png";
			}
			else if ( !(data.localeCompare("fail"))) {
				alert ("Output is neither 0 nor 1 nor fail" );
				return ("fail");			
			}
			else {
				alert ("Something went wrong!! "+data );
				return ("fail"); 
			}
		}
		//if fail
		else if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		}
		//else 
		else if (request.readyState == 4 && request.status != 200 && request.status != 500 ) { 
			alert ("Something went wrong!");
			return ("fail"); }
	}	
	return 0;
}

