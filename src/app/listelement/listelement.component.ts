import { Component, Input } from '@angular/core';

@Component({
  selector: 'lis',
  templateUrl: './listelement.component.html',
  styleUrls: ['./listelement.component.less']
})
export class ListelementComponent {
  @Input() desc;
  @Input() uri;
}
