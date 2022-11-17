import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RequestAppComponent } from './component/request-app/request-app.component';

const routes: Routes = [
  {
    path :'',
    component : HomeComponent
  },
  {
    path : 'request-app',
    loadChildren:()=>import('./component/request-app/request-app.module').then(m => m.RequestAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
