import { Component } from "@angular/core";

@Component({
    selector: 'data-binding',
    // template: `<p> This is data binding component </p>`,
    templateUrl: './data-binding.html',
    styles: []
})
export class DataBinding{
    myapp = 'Data binding component';

    linkUrl = "www.google.com";

    isTrue = true;

    print(){
        return this.myapp;
    }

    change(...e){
        console.log(e)
    }
}