import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing';
import { PeopleComponent } from './people/people.component';
import { PlacesComponent } from './places/places.component';
import { StoriesComponent } from './stories/stories.component';
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PlacesComponent,
    StoriesComponent
  ],
  imports: [
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
