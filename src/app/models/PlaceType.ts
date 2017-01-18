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

    get isSelected(): boolean {
        return this._isSelected;
    }

    select(selection: boolean) {
        this._isSelected = selection;
        for (let item of this.subTypes) {
            item.select(selection);
        }
    }
}
