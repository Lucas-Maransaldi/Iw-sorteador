import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {

  @Input()
  disabled: boolean = false;

  @Output()
  onclick: EventEmitter<null> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  _emitClick(event: Event): void {
    this.onclick.emit();
  }
}
