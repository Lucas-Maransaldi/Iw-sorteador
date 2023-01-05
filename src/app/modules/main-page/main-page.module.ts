import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from 'src/app/store/character/character.effects';
import { CharacterListModule } from '../character-list/character-list.module';
import { ButtomModule } from '../components/buttom/buttom.module';

import { CardModule } from '../components/card/card/card.module';
import { PickFieldModule } from '../components/pick-field/pick-field.module';
import { WinnersPageComponent } from '../winners-page/winners-page.component';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutes } from './main-page.routing';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutes,
    CardModule,
    ButtomModule,
    PickFieldModule,
    ReactiveFormsModule,
    CharacterListModule,
    EffectsModule.forFeature([CharacterEffects])
  ],
  declarations: [MainPageComponent, WinnersPageComponent]
})
export class MainPageModule { }
