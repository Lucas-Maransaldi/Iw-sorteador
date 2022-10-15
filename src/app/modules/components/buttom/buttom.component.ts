import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {

  @Output()
  onclick: EventEmitter<null> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  _emitClick(event: Event): void {
    this.onclick.emit();
  }
}
