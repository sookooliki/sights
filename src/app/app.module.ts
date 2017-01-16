import { PlaceService } from './services/place.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { PlaceTypeItemComponent } from './components/place-type-item/place-type-item.component';

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
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
