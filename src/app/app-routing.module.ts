import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTelComponent } from './component/get-tel/get-tel.component';
import { CardDetailsComponent } from './component/card-details/card-details.component';

const routes: Routes = [
  { path: '', component: GetTelComponent },
  { path: 'details/:id', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
