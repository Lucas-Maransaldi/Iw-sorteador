import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  formControl: FormControl;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.formControl = new FormControl('', Validators.required);
  }

  _handlerDraw(e: Event): void {
    this.characterService.drawUsers(this.formControl.value);
  }
}
