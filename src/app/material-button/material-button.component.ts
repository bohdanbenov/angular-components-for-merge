import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent {
  @Input() btnTitle?:string;
  @Input() btnType?:string;
  @Input() btnColor?:string;

  constructor() { }
}
