import { parseLine } from 'tslint/lib/test/lines';
import { PlaceType } from '../../models/PlaceType';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-type-item',
  templateUrl: './place-type-item.component.html',
  styleUrls: ['./place-type-item.component.scss']
})
export class PlaceTypeItemComponent implements OnInit {

  @Input()
  placeType: PlaceType;

  constructor() { }

  ngOnInit(): void {
  }

  changeExpanded(): void {
    this.placeType.isExpanded = !this.placeType.isExpanded;
  }

  hasChildren(): boolean {
    return this.placeType.subTypes != null && this.placeType.subTypes.length > 0;
  }
}
