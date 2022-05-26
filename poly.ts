class Employee{
    public firstName:string;
    public lastName:string;
    public age:number;

    public print():void{
        console.log("employee detail")
    }
}

class Manager extends Employee{
    constructor(firstName:string,lastName:string,age:number){
        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    public print():void{
        console.log(`${this.firstName} ${this.lastName} - ${this.age}` )
    }
}

class Lead extends Employee{
    constructor(firstName:string,lastName:string,age:number){
        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    public print():void{
        console.log(`${this.firstName} ${this.lastName} - ${this.age}` )
    }
}

let employees:Employee[]=new Array(new Manager("thang", "nguyễn", 12), new Lead("An", "nguyễn", 21))
for (let employee of employees){
    employee.print()
}