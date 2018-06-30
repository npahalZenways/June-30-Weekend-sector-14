var myName : string = 'Nitin';
var classStrength : number = 123;
var isTrue : boolean = true;

// arrays
var numberArray : number[] = [];
numberArray.push(234);

var stringArray : any[] = ['hi', 'bye', 1, [true, 1, '']];
var blankArray : number[] = [];
blankArray.push(1);
var custom = 123;
// custom = 'hello';

var anyVariable :any = 'hello';

anyVariable = 123;
anyVariable = 'hello';
anyVariable = true;
anyVariable = [1,2,'hello'];

// tuple

var myTuple : [number, string] = [1, 'hello'];

// myTuple.push(true);
myTuple.push('hello');
myTuple.push(1);
// myTuple.push(true)

// enum
enum beverage {milk = 10, coffee = 9, tea};

var bevName = beverage[10];
var index = beverage.milk;

// function parameter and return types
function myfunction(param1, param?: number) : string{
    return 'hello';
}

// myfunction()

// unions

function returnPadding(padding : number | string) : string{
    if(typeof padding == 'number'){
        return padding + 'px';
    } else{
        return padding;
    }
}

returnPadding(10);
returnPadding('10px');
// returnPadding(true);