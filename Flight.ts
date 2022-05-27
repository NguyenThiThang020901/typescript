interface IFlight{
    flightNo:number;
    from:string;
    to:string;
    display():void;
}
class Flight1 implements IFlight{
    flightNo: number;
    from: string;
    to: string;

    constructor(flightNo:number,from:string,to:string){
        this.flightNo=flightNo;
        this.from=from;
        this.to=to;
    }
        display(){
        console.log(this.flightNo+" "+this.from+" "+this.to);
        }
}
let myFLight = new Flight1(12, "Quang Binh", "Da nang");
myFLight.display();