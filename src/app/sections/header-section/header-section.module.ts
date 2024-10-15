import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderSectionComponent } from './header-section.component';

@NgModule({
  declarations: [HeaderSectionComponent],
  imports: [
    CommonModule,
    HeaderComponent
  ],
  exports: [HeaderSectionComponent]
})
export class HeaderSectionModule { }
