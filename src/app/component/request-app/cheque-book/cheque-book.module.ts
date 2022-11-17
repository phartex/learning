import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChequeBookRoutingModule } from './cheque-book-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { ChequeBookComponent } from './cheque-book.component';


@NgModule({
  declarations: [ChequeBookComponent],
  imports: [
    CommonModule,
    ChequeBookRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class ChequeBookModule { }
