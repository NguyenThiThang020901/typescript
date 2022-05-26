class Student{
  private _name:string;
// readonly so cannot assign 
display(){
    console.log(this._name);
}

get name():string{
return this._name;
}
set name(name:string){
    this._name=name;
}
}

let student = new Student ();
student.name ="Jon";
console.log(student.name);