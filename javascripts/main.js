"use strict";

// Requires
let $ = require('jquery');
let Robots = require('./RobotDefinitions.js');
$(".robot-image").hide();

// Get Robots
let myRobotsObj = Robots.myRobots;
let robotVals= Object.values(myRobotsObj);

console.log("Robot Object: ", myRobotsObj);

// Placeholderrs
var robot1 = null;
var robot2 = null;

// For Each Robot, append it to the dropdown choices
for(var i = 0; i < robotVals.length; i++){
	let robotElement1 = `<li class="dropdown-choice1" id="${robotVals[i].id}">${robotVals[i].model}</li>`;
	let robotElement2 = `<li class="dropdown-choice2" id="${robotVals[i].id}">${robotVals[i].model}</li>`;
	$("#drop1").append(robotElement1);
	$("#drop2").append(robotElement2);
}


let extractChosenRobots = function(event){
	var newImage, key;
	if(event.currentTarget.parentNode.id === 'drop1'){
		key =  'my' + event.target.id;
		newImage = myRobotsObj[key].img;
		$("#robot-image-1").attr("src", newImage);
		$("#robot-image-1").show();
	}

	if(event.currentTarget.parentNode.id === 'drop2'){
		key = 'my' + event.target.id;
		newImage = myRobotsObj[key].img;
		$("#robot-image-2").attr("src", newImage);
		$("#robot-image-2").show();
	}
};

$(".dropdown-choice1").click(extractChosenRobots);
$(".dropdown-choice2").click(extractChosenRobots);




// loadRobotToDom will take 2 arguments
/* 		* 1) Which side of the screen to load the robot to
		* 2) Which robot to load
*/





// Load robots to dropdown

// Event listener for dropdown

/* 	
	- OnUserNamesBotClick()
		* Change input box to label.

	- OnClickSubmit
		* Calculate Health
			* Robot 1
			* Robot 2
		* Calculate Damage
			* Robot 1
			* Robot 2 
		* Show Attack Button 
	- OnClickAttack!
		* Calculate New Health
			* Robot 1
			* Robot 2 
*/
