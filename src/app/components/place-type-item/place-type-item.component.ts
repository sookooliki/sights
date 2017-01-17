import { PlaceType } from '../../models/PlaceType';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-type-item',
  templateUrl: './place-type-item.component.html',
  styleUrls: ['./place-type-item.component.scss']
})
export class PlaceTypeItemComponent implements OnInit {

  private _isExpanded: boolean = false;
  private _hasAnySelectedChild: boolean = false;

  @Input()
  placeType: PlaceType;

  @Output()
  selectionChanged = new EventEmitter<boolean>();

  constructor() { }

  get isSelected(): boolean {
    return this.placeType.isSelected;
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  get hasAnySelectedChild(): boolean {
    return this._hasAnySelectedChild;
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
    if (placeType === this.placeType) {
      this.selectionChanged.emit(this.placeType.isSelected);
      this._hasAnySelectedChild = selection;
    }
  }

  onSelectionChanged(selection: boolean): void {
    if (selection) {
      this._hasAnySelectedChild = true;
      let isAllChildrenSelected = true;
      for (let item of this.placeType.subTypes) {
        if (!item.isSelected) {
          isAllChildrenSelected = false;
          break;
        }
      }
      this.placeType.isSelected = isAllChildrenSelected;
    } else {
      this.placeType.isSelected = false;
      this._hasAnySelectedChild = this.getHasAnySelectedChild(this.placeType);
    }
    this.selectionChanged.emit(selection);
  }

  private getHasAnySelectedChild(placeType: PlaceType): boolean {
    if (placeType.subTypes != null) {
      for (let item of placeType.subTypes) {
        if (item.isSelected || this.getHasAnySelectedChild(item)) {
          return true;
        }
      }
    }
    return false;
  }
}
