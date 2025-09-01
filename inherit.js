// var bird = {
// hasfeathers : true,
// canFly : true,
// hasWings : true 
// };

// var eagle1 = Object.create(bird);
// console.log('eagle1: ' , eagle1);
// console.log("eagle1 has wings",eagle1.hasWings)
// console.log("eagle1 can fly", eagle1.canFly)
// console.log("eagle1 has feathers", eagle1.hasfeathers)


// var eagle2 = Object.create(bird);
// console.log('Eagle2 has wings: ' ,eagle2.hasWings);



class Train{ // creating class
constructor(color,lightsOn){
    this.color = color; 
    this.lightsOn = lightsOn;
}
toggleLights(){ // this is method
    this.lightsOn = !this.lightsOn; // toggling to ensure true or false
} 
lightsStatus(){
    console.log('Lights are ' + (this.lightsOn ? 'on' : 'off'));
}
}

// another example
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //