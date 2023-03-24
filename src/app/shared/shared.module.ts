import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './component/textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';

@NgModule({
  declarations: [TextboxComponent, DropdownComponent, MovieCardComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [TextboxComponent, DropdownComponent, MovieCardComponent],
})
export class SharedModule {}
