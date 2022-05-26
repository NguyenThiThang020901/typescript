
class Passenger{
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    display(){
        console.log(this.firstName + " " + this.lastName + " " + this.age);
    }
}

let passenger = new Passenger ("thu", "nguyen", 12);
passenger.display();
// var passenger2 = new Passenger ("an", "pham", 12);
// passenger2.display();
for(let item in passenger){
    // if(passenger[item] instanceof Function){
    //     continue;
    // }
    // else{
        console.log(item);
        console.log(passenger[item]);
  //  }
}
