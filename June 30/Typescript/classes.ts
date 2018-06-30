class school{
    // base class
    protected schoolName: string;
    
    constructor(name){
        this.schoolName = name;
    }
}

// var mySchool = new school('ABC school');

// inheritance and access specifiers

class student extends school{
    // derived class
    name: string;
    rollnum: number;
    constructor(name, roll, schoolName){
        super(schoolName);
        this.name = name;
        this.rollnum = roll;
    }
}

var student1 = new student('Nitin', 123, 'ABC school');

// console.log(student1.schoolName)
