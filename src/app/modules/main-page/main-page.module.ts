import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtomModule } from '../components/buttom/buttom.module';

import { CardModule } from '../components/card/card/card.module';
import { PickFieldModule } from '../components/pick-field/pick-field.module';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutes } from './main-page.routing';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutes,
    CardModule,
    ButtomModule,
    PickFieldModule,
    ReactiveFormsModule
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule { }
