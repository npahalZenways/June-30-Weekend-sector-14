export module m1{
    export class customClass{
        name: string;
        constructor(name){
            this.name = name;
        }
    }
}

var obj = new m1.customClass('custom');