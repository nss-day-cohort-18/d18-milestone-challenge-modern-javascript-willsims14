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
	let robotElement1 = `<li class="dropdown-choice1">${robotVals[i].model}</li>`;
	let robotElement2 = `<li class="dropdown-choice2">${robotVals[i].model}</li>`;
	$("#drop1").append(robotElement1);
	$("#drop2").append(robotElement2);
}





let extractChosenRobots = function(event){
	if(event.currentTarget.parentNode.id === 'drop1'){
		robot1 = event.target.innerHTML;
		var newImage = "";
		console.log("Robot1: ", robot1);
		console.log("New Image: ", newImage);
	}

	if(event.currentTarget.parentNode.id === 'drop2'){
		robot2 = event.target.innerHTML;
		// set image
		console.log("Robot2: ", robot2);
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

/* 	- OnClickDropdown
		* selectedRobot1 = thatRobot1; 
		* selectedRobot2 = thatRobot2;
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
