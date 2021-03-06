import { IPlace } from './models/Place';
import { PlaceType } from './models/PlaceType';
import { GeolocationService } from './services/geolocation.service';
import { PlaceService } from './services/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  placeTypes: PlaceType[] = [];
  position: Position;
  radius: number;
  places: { [key: string]: IPlace[] };

  constructor(
    private _placeService: PlaceService,
    private _geolocationService: GeolocationService
  ) { }

  ngOnInit() {
    this.getPlaceTypes();
    this.getPosition();
  }

  getPlaceTypes(): void {
    this._placeService.getPlaceTypeTree()
      .subscribe(placeTypes => this.placeTypes = placeTypes);
  }

  getPosition(): void {
    this._geolocationService.getLocation()
      .then((position) => this.position = position);
  }

  onSelectionChanged(): void {
    let selectedPlaceTypes = this.findSelectedPlaceTypes(this.placeTypes).map((placeType) => placeType.resourceUrl);
    if (selectedPlaceTypes != null && selectedPlaceTypes.length > 0) {
      this._placeService.getAll(this.position.coords.latitude, this.position.coords.longitude, 5, selectedPlaceTypes)
        .subscribe((places) => this.places = places);
    } else {
      this.places = {};
    }
  }

  findSelectedPlaceTypes(placeTypes: PlaceType[]): PlaceType[] {
    let selectedPlaceTypes: PlaceType[] = [];
    for (let item of placeTypes) {
      if (item.isSelected) {
        selectedPlaceTypes.push(item);
      } else {
        selectedPlaceTypes = selectedPlaceTypes.concat(this.findSelectedPlaceTypes(item.subTypes));
      }
    }
    return selectedPlaceTypes;
  }
}
