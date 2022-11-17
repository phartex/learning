import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRequestComponent } from './card-request.component';

const routes: Routes = [
  {
    path: '',
    component:CardRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRequestRoutingModule { }
