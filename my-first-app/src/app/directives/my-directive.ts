import { Directive, ElementRef, HostListener, HostBinding, Renderer2, EventEmitter } from "@angular/core";

@Directive({
    selector: '[myDirective]',
    inputs: ['name'],
    outputs: ['myoutput']
})
export class MyDirective{
    constructor(
        private el: ElementRef,
        private render: Renderer2
    ){
        console.log(el)
    }

    name;

    myoutput = new EventEmitter();

    @HostListener('mouseenter') changeLink(){
        
        this.render.setProperty(this.el.nativeElement, 'href', 'abc');

        this.myoutput.emit();

        console.log(this.name)
    }

    @HostListener('click') afterClicking(){
        this.el.nativeElement.style.color = "red";
    }
}