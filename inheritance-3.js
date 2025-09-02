class Vehicle{
constructor(brand = "generic", speed = 0, fuel = 100){
    this.brand =brand;
    this.speed = speed;
    this.fuel = fuel;

}
drive(){
    this.fuel -= 10;
    this.speed += 20;

}
refuel(){
    this.fuel += 20;
}


}
class Car extends Vehicle{

constructor(brand, speed, fuel, seats = 4, mileage = 0){
    super(seats, mileage)
    this.seats = seats;
    this.mileage = mileage;
}
travel(){
    this.travel += 50;
    this.fuel -= 15;
}

}
function carFactory(){
    let car = new Car("Ferrari", 0, 120,500);
    car.drive();
    car.drive();
    return carFactory;
}

console.log(carFactory());
