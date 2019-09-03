import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { PetComponent } from './pet/pet.component';

const appRoutes: Routes = [
  {path: 'pet', component: PetComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
