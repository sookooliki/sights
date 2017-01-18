import { PlaceType } from '../models/PlaceType';
import { Injectable } from '@angular/core';

@Injectable()
export class PlaceTypeFactoryService {

  constructor() { }

  cretePlaceType(placeType: PlaceType): PlaceType {
    let newPlaceType = new PlaceType(placeType.resourceUrl, placeType.title);
    newPlaceType.resourceUrl = placeType.resourceUrl;
    newPlaceType.title = placeType.title;
    if (placeType.subTypes != null) {
      for (let item of placeType.subTypes) {
        item = this.cretePlaceType(item);
        item.parentType = newPlaceType;
        newPlaceType.subTypes.push(item);
      }
    }
    return newPlaceType;
  }
}
