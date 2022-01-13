import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-card',
  templateUrl: './nested-card.component.html',
  styleUrls: ['./nested-card.component.css']
})
export class NestedCardComponent {
  @Input() cardTitle?:any;

  constructor() { }
}
