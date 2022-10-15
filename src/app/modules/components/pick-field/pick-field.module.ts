import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickFieldComponent } from './pick-field.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PickFieldComponent, FieldComponent],
  exports: [PickFieldComponent]
})
export class PickFieldModule { }
