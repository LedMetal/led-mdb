import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './component/textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TextboxComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [TextboxComponent],
})
export class SharedModule {}
