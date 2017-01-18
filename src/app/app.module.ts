import { AppComponent } from './app.component';
import { PlaceTypeItemComponent } from './components/place-type-item/place-type-item.component';
import { GeolocationService } from './services/geolocation.service';
import { PlaceTypeFactoryService } from './services/place-type-factory.service';
import { PlaceService } from './services/place.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    PlaceTypeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    PlaceService,
    PlaceTypeFactoryService,
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
