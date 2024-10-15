import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { FooterSectionComponent } from './footer-section.component';

@NgModule({
  declarations: [FooterSectionComponent],
  imports: [
    CommonModule,
    FooterComponent
  ],
  exports: [FooterSectionComponent]
})
export class FooterSectionModule { }
