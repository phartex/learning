import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispenseErrorComponent } from './dispense-error.component';

const routes: Routes = [{
  path:'',
  component: DispenseErrorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispenseErrorRoutingModule { }
