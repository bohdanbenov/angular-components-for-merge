import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mbutton',
  templateUrl: './mbutton.component.html',
  styleUrls: ['./mbutton.component.css']
})
export class MbuttonComponent {
  @Input() btnTitle?:string;
  
  constructor() {}
}
