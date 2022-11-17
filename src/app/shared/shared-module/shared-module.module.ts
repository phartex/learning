import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReusableDataComponent } from 'src/app/component/request-app/reusable-data/reusable-data.component';



@NgModule({
  declarations: [ReusableDataComponent],
  exports:[ReusableDataComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModuleModule { }
