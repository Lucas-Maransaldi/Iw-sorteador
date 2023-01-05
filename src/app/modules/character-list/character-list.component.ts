import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/models/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  _winners$ : Observable<Character[]>

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._winners$ = this._characterService.getWinners();
  }

}
