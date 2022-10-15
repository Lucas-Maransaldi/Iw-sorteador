import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  formControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl('', {});
    this.formControl.valueChanges.subscribe(x => console.log(x));
  }

  _handlerDraw(e: null): void {
    // // Shuffle array
    // const shuffled = array.sort(() => 0.5 - Math.random());

    // // Get sub-array of first n elements after shuffled
    // let selected = shuffled.slice(0, n);
  }
}
