import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pick-field',
  templateUrl: './pick-field.component.html',
  styleUrls: ['./pick-field.component.css'],
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => PickFieldComponent),
            multi: true     
    }   
  ]
})
export class PickFieldComponent implements OnInit, ControlValueAccessor{

  @Input()
  values: string[];

  @Input()
  multi: boolean = false;

  @Output()
  selectedValue: EventEmitter<string[]>

  _selectedValue: string;

  set value(val: string){
    this._selectedValue = val
    this.onChange(val)
    this.onTouch(val)
  }

  onChange: (value: string) => void = (value) => {};
  onTouch: (value: string) => void = () => {};

  constructor() { }

  writeValue(obj: string): void {
    this._selectedValue = obj;
    this.onChange(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  _setSelected(selected: string): void {
    this._selectedValue = selected;
    this.onChange(selected);
  }

}
