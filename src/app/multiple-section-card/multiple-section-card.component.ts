import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-section-card',
  templateUrl: './multiple-section-card.component.html',
  styleUrls: ['./multiple-section-card.component.css']
})
export class MultipleSectionCardComponent {
  @Input() cardTitle?:string;
  @Input() cardSubtitle?:string;
  @Input() cardImageUrl?:string;
  @Input() cardContent?:string;

  constructor() { }
}
