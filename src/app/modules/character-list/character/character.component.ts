import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: Character;

  hidden: boolean = true;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this.hidden = !this.character.isReveled;
  }

  _reavelcharacter(e : Event): void {
    this.hidden = false;
    this._characterService.updateWinners({ ...this.character, isReveled: true})
  }

  _buildImage(): string {
    return `assets/img/characters/${this.character.imageName}.png`
  }

}
