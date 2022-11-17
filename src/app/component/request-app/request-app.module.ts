import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAppRoutingModule } from './request-app-routing.module';
import { RequestAppComponent } from './request-app.component';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { CardRequestComponent } from './card-request/card-request.component';
import { ChequeBookComponent } from './cheque-book/cheque-book.component';
import { DispenseErrorComponent } from './dispense-error/dispense-error.component';
import { ReusableDataComponent } from './reusable-data/reusable-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
   RequestAppComponent,
  ],
  imports: [
    CommonModule,
    RequestAppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    RouterModule
  ]
})
export class RequestAppModule { }
