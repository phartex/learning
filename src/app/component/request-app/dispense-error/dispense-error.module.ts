import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispenseErrorRoutingModule } from './dispense-error-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { DispenseErrorComponent } from './dispense-error.component';


@NgModule({
  declarations: [DispenseErrorComponent],
  imports: [
    CommonModule,
    DispenseErrorRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class DispenseErrorModule { }
