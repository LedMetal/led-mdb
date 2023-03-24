import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options = ['Option 1', 'Option 2', 'Option 3'];
  @Input() placeholder = 'Select one';
  @Output() emitValue = new EventEmitter<string>();

  selectedValue = '';
  selectionMade = false;
  faCaretDown = faCaretDown;

  handleDropDownClick(value: string) {
    if (value !== this.selectedValue) {
      this.emitValue.emit(value);
    }

    this.selectedValue = value;
    this.selectionMade = value !== '';
  }
}
