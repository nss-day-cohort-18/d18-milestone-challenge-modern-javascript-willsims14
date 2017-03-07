"use strict";


/**********************/
/*** Root Prototype ***/
/**********************/
var Robot = function(){
	this.type = null;
	this.healthRange = null;				// Health
	this.damageRange = null;				// Damage
	this.methodOfMovement = null;			// Method Of Movement
	this.speed = null;						// Attack Speed (out of 10)
	this.attack = null;						// Attack Style
};
		/*************/
		/*** Types ***/
		/*************/
		// Drone
		var Drone = function(){
			this.type = "Drone";
			this.methodOfMovement = "fly";			// Method Of Movement
			this.speed = 8; 						// Attack Speed (out of 10)
			this.sourceOfPower = null; 				// Unique Property
		};
		Drone.prototype = new Robot();
		// Android
		var Android = function(){
			this.type = "Android";
			this.methodOfMovement = "walk";			// Method of Movement
			this.speed = 4;							// Attack Speed (out of 10)
			this.sentience = null; 					// Unique Property
		};
		Android.prototype = new Robot();
		// Mini Tank
		var MiniatureTank = function(){
			this.type = "Miniature Tank";
			this.methodOfMovement = "roll";			// Method of Movement
			this.speed = 6;							// Attack Speed (out of 10)
			this.projectilesUsed = null; 			// Unique Property
		};
		MiniatureTank.prototype = new Robot();


				/**************/
				/*** Models ***/
				/**************/

				// Drone ****************************************
				var SolarDrone = function(){
					this.model = "Solar Drone";
					this.img = 'img/solar_drone.png';
					this.healthRange = {"min": 80,"max":120};
					this.damageRange = {"min":100,"max":140};
					this.sourceOfPower = "Solar Panels";
				};
				SolarDrone.prototype = new Drone();

				var MicroDrone = function(){
					this.model = "Micro Drone";
					this.img = 'img/micro_drone.png';
					this.healthRange = {"min": 70,"max":110};
					this.damageRange = {"min":100,"max":160};
					this.sourceOfPower = "Lithium";
				};
				MicroDrone.prototype = new Drone();

				// Android ****************************************
				var HunkOfMetal = function(){
					this.model = "Hunk Of Metal";
					this.img = 'img/metal.png';
					this.healthRange = {"min": 100,"max":150};
					this.damageRange = {"min":80,"max":110};
					this.sentience = false;
				};
				HunkOfMetal.prototype = new Android();

				var SentientKillingMachine = function(){
					this.model = "Sentient Killing Machine";
					this.img = "img/sentient_killing_machine.png";
					this.healthRange = {"min": 80,"max":140};
					this.damageRange = {"min":110,"max":140};
					this.sentience = true;
				};
				SentientKillingMachine.prototype = new Android();

				// MiniatureTank ****************************************
				var MiniPanzer = function(){
					this.model = "Mini Panzer";
					this.img = 'img/panzer.png';
					this.healthRange = {"min": 160,"max":200};
					this.damageRange = {"min":  60,"max":120};
					this.weaponsUsed = ['Anti-air missles', 'Assault Rifle'];	
				};
				MiniPanzer.prototype = new MiniatureTank();

				var BigBoy = function(){
					this.model = "Big Boy";
					this.img = 'img/big_boy.png';
					this.healthRange = {"min": 150,"max":220};
					this.damageRange = {"min":  50,"max":110};
					this.weaponsUsed = ['Anti-air missles', 'Assault Rifle'];	
				};
				BigBoy.prototype = new MiniatureTank();

///////////////////////////////////////
///		 END PROTOTYPE CHAIN		///
///////////////////////////////////////



function getRandomInRange(min, max){
	return (Math.random() * (max - min) + min).toFixed(0);
}

// Generate random health and damage values (using the range & method that were defined above)

// Drones
let mySolarDrone = new SolarDrone();
mySolarDrone.damage = getRandomInRange(mySolarDrone.damageRange.min, mySolarDrone.damageRange.max);
mySolarDrone.health = getRandomInRange(mySolarDrone.healthRange.min, mySolarDrone.healthRange.max);
// myRobots.push(mySolarDrone);

let myMicroDrone = new MicroDrone();
myMicroDrone.damage = getRandomInRange(myMicroDrone.damageRange.min, myMicroDrone.damageRange.max);
myMicroDrone.health = getRandomInRange(myMicroDrone.healthRange.min, myMicroDrone.healthRange.max);
// myRobots.push(myMicroDrone);

// Androids
let myHunkOfMetal = new HunkOfMetal();
myHunkOfMetal.damage = getRandomInRange(myHunkOfMetal.damageRange.min, myHunkOfMetal.damageRange.max);
myHunkOfMetal.health = getRandomInRange(myHunkOfMetal.healthRange.min, myHunkOfMetal.healthRange.max);
// myRobots.push(myHunkOfMetal);

let mySentientKillingMachine = new SentientKillingMachine();
mySentientKillingMachine.damage = getRandomInRange(mySentientKillingMachine.damageRange.min, mySentientKillingMachine.damageRange.max);
mySentientKillingMachine.health = getRandomInRange(mySentientKillingMachine.healthRange.min, mySentientKillingMachine.healthRange.max);
// myRobots.push(mySentientKillingMachine);

// Mini Tanks
let myPanzer = new MiniPanzer();
myPanzer.damage = getRandomInRange(myPanzer.damageRange.min, myPanzer.damageRange.max);
myPanzer.health = getRandomInRange(myPanzer.healthRange.min, myPanzer.healthRange.max);
// myRobots.push(myPanzer);

let myBigBoy = new BigBoy();
myBigBoy.damage = getRandomInRange(myBigBoy.damageRange.min, myBigBoy.damageRange.max);
myBigBoy.health = getRandomInRange(myBigBoy.healthRange.min, myBigBoy.healthRange.max);
// myRobots.push(myBigBoy);

let myRobots = {
	mySolarDrone,
	myMicroDrone,
	myHunkOfMetal,
	mySentientKillingMachine,
	myPanzer,
	myBigBoy
};

module.exports = {myRobots};







