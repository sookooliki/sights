import { IPlace } from '../models/Place';
import { parse } from 'querystring';
import { PlaceTypeFactoryService } from './place-type-factory.service';
import { platform } from 'os';
import { debug } from 'util';
import { PlaceType } from '../models/PlaceType';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class PlaceService {

  constructor(
    private _http: Http,
    private _placeTypeFactoryService: PlaceTypeFactoryService
  ) { }

  getAll(latitude: number, longitude: number, radius: number, types: string[]) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('latitude', latitude.toString());
    params.set('longitude', longitude.toString());
    params.set('radius', radius.toString());
    params.set('types', types.toString());

    return this._http.get('/api/place/getAll', {
      search: params
    }).map((response) => response.json() as { [key: string]: IPlace[] });
  }

  getPlaceTypeTree() {
    return this._http.get('/api/place/getPlaceTypeTree')
      .map((response) =>
        (response.json() as PlaceType[])
          .map((placeType) => this._placeTypeFactoryService.cretePlaceType(placeType)));
  }
}
