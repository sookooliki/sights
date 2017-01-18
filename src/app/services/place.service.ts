import { PlaceTypeFactoryService } from './place-type-factory.service';
import { platform } from 'os';
import { debug } from 'util';
import { PlaceType } from '../models/PlaceType';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlaceService {

  constructor(
    private _http: Http,
    private _placeTypeFactoryService: PlaceTypeFactoryService
  ) { }

  getPlaceTypeTree() {
    return this._http.get('/api/place/getPlaceTypeTree')
      .map((response) =>
        (response.json() as PlaceType[])
          .map((placeType) => this._placeTypeFactoryService.cretePlaceType(placeType)));
  }
}
