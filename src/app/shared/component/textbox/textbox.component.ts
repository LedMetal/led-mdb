import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent {
  @Input() placeholder = '';
  @Input() password = false;
  @Input() highlightColor = '#006eff';
  @Output() emitInput = new EventEmitter<string>();

  typing = false;
  inputText = '';
  showPassword = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  handleInputChange(value: string) {
    this.inputText = value;
    this.typing = this.inputText !== '';

    this.emitInput.emit(this.inputText);
  }

  handleEyeClick(): void {
    this.showPassword = !this.showPassword;
  }
}
