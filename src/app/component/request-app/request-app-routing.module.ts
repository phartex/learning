import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAppComponent } from './request-app.component';

const routes: Routes = [
  {
    path:'',
    component: RequestAppComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-request',
        pathMatch: 'full',
      },
      {
        path: 'all-request',
        loadChildren: () =>
          import('./all/all.module').then((m) => m.AllModule),
      },
      {
        path: 'cheque-book',
        loadChildren: () =>
          import('./cheque-book/cheque-book.module').then(
            (m) => m.ChequeBookModule
          ),
      },
      {
        path: 'card-request',
        loadChildren: () =>
          import('./card-request/card-request.module').then(
            (m) => m.CardRequestModule
          ),
      },
     {
      path: 'dispense-error',
      loadChildren : ()=> import('./dispense-error/dispense-error.module').then((m) => m.DispenseErrorModule)
     }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestAppRoutingModule { }
