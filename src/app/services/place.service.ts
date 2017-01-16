import { platform } from 'os';
import { debug } from 'util';
import { PlaceType } from '../models/PlaceType';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlaceService {

  constructor(private http: Http) { }

  getPlaceTypeTree() {
    return this.http.get('/api/place/getPlaceTypeTree')
      .map((response) => response.json() as PlaceType[]);
  }
}
