import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { FooterSectionComponent } from './footer-section.component';
import { FooterSkeletonModule } from '../../skeleton/footer-skeleton/footer-skeleton.module';

@NgModule({
  declarations: [FooterSectionComponent],
  imports: [
    CommonModule,
    FooterComponent,
    FooterSkeletonModule
  ],
  exports: [FooterSectionComponent]
})
export class FooterSectionModule { }
