import { PlaceType } from './models/PlaceType';
import { PlaceService } from './services/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  placeTypes: PlaceType[] = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.getPlaceTypes();
  }

  getPlaceTypes() {
    this.placeService.getPlaceTypeTree()
      .subscribe(placeTypes => this.placeTypes = placeTypes);
  }
}
