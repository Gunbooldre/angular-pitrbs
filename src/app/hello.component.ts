import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello World, my name is Dias  !</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
