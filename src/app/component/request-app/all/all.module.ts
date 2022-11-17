import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './all.component';


@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    AllRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class AllModule { }
