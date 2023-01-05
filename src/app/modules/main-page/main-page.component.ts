import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  formControl: FormControl;
  _destroy$: EventEmitter<void> = new EventEmitter<void>;

  _allUsers: number | string = '-'
  _waitingToBeDrawedUsers: number | string = '-'

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.setCurrentUsers();
    this.formControl = new FormControl('', Validators.required);
    this.characterService.getAllUsers().pipe(takeUntil(this._destroy$)).subscribe((characters) => this._allUsers = characters?.length);
    this.characterService.getcurrentUsers().pipe(takeUntil(this._destroy$)).subscribe((characters) => this._waitingToBeDrawedUsers = characters?.length);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  _handlerDraw(e: Event): void {
    this.characterService.drawUsers(this.formControl.value);
  }

  _handlerReset(e: Event): void {
    this.characterService.resetUsers();
  }
}
