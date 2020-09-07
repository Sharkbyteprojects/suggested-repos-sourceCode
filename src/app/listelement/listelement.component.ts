import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lis',
  templateUrl: './listelement.component.html',
  styleUrls: ['./listelement.component.less']
})
export class ListelementComponent implements OnInit {
  @Input() desc;
  @Input() uri;
  constructor() { }
  ngOnInit(): void {
  }
}
