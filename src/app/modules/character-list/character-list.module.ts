import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  imports: [
    CommonModule, 
  ],
  declarations: [CharacterListComponent, CharacterComponent],
  exports: [CharacterListComponent]
})
export class CharacterListModule { }
