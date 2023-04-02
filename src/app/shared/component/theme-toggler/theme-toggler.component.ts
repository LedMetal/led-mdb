import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Theme } from '../../constants';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
})
export class ThemeTogglerComponent {
  @Input() activeTheme: Theme = Theme.large;
  @Output() changeTheme = new EventEmitter<Theme>();

  handleThemeClick(selectedTheme: Theme): void {
    if (selectedTheme !== this.activeTheme) {
      this.changeTheme.emit(selectedTheme);
    }
  }
}
