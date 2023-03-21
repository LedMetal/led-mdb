import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './component/textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './component/dropdown/dropdown.component';

@NgModule({
  declarations: [TextboxComponent, DropdownComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [TextboxComponent, DropdownComponent],
})
export class SharedModule {}
