import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  getLocation(): Promise<Position> {
    return new Promise((resove, reject) => {
      navigator.geolocation.getCurrentPosition(resove, reject);
    });
  }
}
