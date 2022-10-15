import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  formControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl('', Validators.required);
  }

  _handlerDraw(e: null): void {
    console.log('meu pau')
    // // Shuffle array
    // const shuffled = array.sort(() => 0.5 - Math.random());

    // // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(0, n);
  }
}
