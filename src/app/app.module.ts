import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PetComponent } from './pet/pet.component';
import { NavbarComponent } from './element/navbar/navbar.component';

const appRoutes: Routes = [
  {path: 'pet', component: PetComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PetComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CollapseModule.forRoot(), BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
