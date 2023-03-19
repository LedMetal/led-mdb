import { Component, Input } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent {
  @Input() placeholder = '';
  @Input() password = false;

  typing = false;
  inputText = '';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  handleInputChange(value: string) {
    this.inputText = value;
    this.typing = this.inputText !== '';
  }

  handleEyeClick(): void {
    this.showPassword = !this.showPassword;
  }
}
