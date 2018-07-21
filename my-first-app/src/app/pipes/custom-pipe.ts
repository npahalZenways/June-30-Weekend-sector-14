import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custom'
})
export class CustomPipe implements PipeTransform{
    transform(value, option){
        if(option == 'uppercase'){
            return value.toUpperCase();
        } else if(option == 'lowercase'){
            return value.toLowerCase();
        } else{
            return value;
        }
    }
}