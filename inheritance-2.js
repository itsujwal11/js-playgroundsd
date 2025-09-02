class Animal{
constructor (species = "Dog", age = 2, energy = 50){
this.species = species;
this.age = age;
this.energy = energy;
}
eat(){
    this.energy += 20;
}
play(){
    this.energy -= 15;
    
}

}

class pet extends Animal{
constructor (species, age, energy, ownerName = "unknown", happiness = 50){
   super(species,age,energy);
    this.ownerName = ownerName;
    this.happiness = happiness;
}
getLove(){
    this.happiness += 10;

}


}

function puppy(){
let pup = new pet("puppy", 1,40,"bob" , 30);
pup.eat();
pup.getLove();
return pup;

}
function car(){
    let kitty = new pet("Cat", 3,60,"Alice", 70);
    kitty.play();
    return kitty;

}