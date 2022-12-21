import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/models/character';

@Component({
  selector: 'app-winners-page',
  templateUrl: './winners-page.component.html',
  styleUrls: ['./winners-page.component.css']
})
export class WinnersPageComponent implements OnInit, OnDestroy {

  _winnersDiscordRef: string;
  _numberOfWinners: number;
  _diaSessao: string = '20/12';

  _destroy$: EventEmitter<void> = new EventEmitter<void>;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.getWinners()
      .pipe(takeUntil(this._destroy$))
      .subscribe((users) => {
        this._buildDiscordRef(users);
        this._numberOfWinners = users.length;
      })
  }
  
  ngOnDestroy(): void {
    this._destroy$.next();
  }

  private _buildDiscordRef(winners: Character[]): void {
    this._winnersDiscordRef = winners.reduce((acc, cur) => `${acc}, @${cur.discordRefer}`, '');
  }

}
