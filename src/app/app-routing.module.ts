import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './security/auth-guard.service';
import { PetComponent } from './pet/pet.component';
import { ClientComponent } from './client/client.component';
import { ErrorComponent } from './error/error/error.component';

const appRoutes: Routes = [
  {path: 'pet', canActivate: [AuthGuard], component: PetComponent},
  {path: 'pet/:id', component: PetComponent},
  {path: 'client', component: ClientComponent, children: [
    {path: ':id', component: ClientComponent}
  ]},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'error', component: ErrorComponent, data: {message: 'Access Denied.'}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
