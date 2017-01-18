import { iterateListLike } from '@angular/platform-browser/src/facade/collection';
import { puts } from 'util';
import { SafeResourceUrl } from '@angular/platform-browser';
import { iterableDiff } from '@angular/core/src/change_detection/change_detection';
import { selector } from 'rxjs/operator/multicast';

export class PlaceType {

    private _subTypes: PlaceType[] = [];
    private _isSelected: boolean = false;

    parentType: PlaceType = null;

    constructor(
        public resourceUrl: string,
        public title: string
    ) { }

    get subTypes(): PlaceType[] {
        return this._subTypes;
    };

    get hasChildren(): boolean {
        return this.subTypes.length > 0;
    }

    get isSelected(): boolean {
        if (!this.hasChildren) {
            return this._isSelected;
        } else {
            for (let item of this.subTypes) {
                if (!item.isSelected) {
                    return false;
                }
            }
            return true;
        }
    }

    get hasAnySelectedChild(): boolean {
        for (let item of this._subTypes) {
            if (item.isSelected || item.hasAnySelectedChild) {
                return true;
            }
        }
        return false;
    }

    select(selection: boolean) {
        this._isSelected = selection;
        for (let item of this.subTypes) {
            item.select(selection);
        }
    }
}
