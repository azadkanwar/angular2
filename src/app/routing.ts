import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PlacesComponent } from './places/places.component';
import { StoriesComponent } from './stories/stories.component';
const routes: Routes = [
    { path: '', redirectTo: '/people', pathMatch: 'full' },
    { path: 'dashboard', component: AppComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'places', component: PlacesComponent },
    { path: 'stories', component: StoriesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
