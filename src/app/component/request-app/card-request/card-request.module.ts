import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRequestRoutingModule } from './card-request-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { CardRequestComponent } from './card-request.component';


@NgModule({
  declarations: [CardRequestComponent],
  imports: [
    CommonModule,
    CardRequestRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class CardRequestModule { }
