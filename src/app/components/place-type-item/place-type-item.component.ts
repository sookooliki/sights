import { PlaceType } from '../../models/PlaceType';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-type-item',
  templateUrl: './place-type-item.component.html',
  styleUrls: ['./place-type-item.component.scss']
})
export class PlaceTypeItemComponent implements OnInit {

  private _isExpanded: boolean = false;

  @Input()
  placeType: PlaceType;

  @Output()
  selectionChanged = new EventEmitter();

  constructor() { }

  get isSelected(): boolean {
    return this.placeType.isSelected;
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  get hasAnySelectedChild(): boolean {
    return this.placeType.hasAnySelectedChild;
  }

  get hasChildren(): boolean {
    return this.placeType.subTypes != null && this.placeType.subTypes.length > 0;
  }

  ngOnInit(): void {
  }

  select(): void {
    this.placeType.select(!this.placeType.isSelected);
    this.selectionChanged.emit();
  }

  changeExpanded(): void {
    this._isExpanded = !this._isExpanded;
  }

  onSelectionChanged(): void {
    this.selectionChanged.emit();
  }
}
