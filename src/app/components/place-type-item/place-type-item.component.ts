import { parseLine } from 'tslint/lib/test/lines';
import { PlaceType } from '../../models/PlaceType';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-type-item',
  templateUrl: './place-type-item.component.html',
  styleUrls: ['./place-type-item.component.scss']
})
export class PlaceTypeItemComponent implements OnInit {

  private _isExpanded: boolean;

  @Input()
  placeType: PlaceType;

  constructor() { }

  get isSelected(): boolean {
    return this.placeType.isSelected;
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  get hasChildren(): boolean {
    return this.placeType.subTypes != null && this.placeType.subTypes.length > 0;
  }

  ngOnInit(): void {
  }

  changeExpanded(): void {
    this._isExpanded = !this._isExpanded;
  }

  select(placeType: PlaceType, selection: boolean): void {
    placeType.isSelected = selection;
    if (placeType.subTypes != null) {
      for (let item of placeType.subTypes) {
        this.select(item, selection);
      }
    }
  }
}
