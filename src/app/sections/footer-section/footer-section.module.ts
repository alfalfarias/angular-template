import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './footer-section.component';
import { FooterSkeletonModule } from '../../skeleton/footer-skeleton/footer-skeleton.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [FooterSectionComponent],
  imports: [
    CommonModule,
    FooterModule,
    FooterSkeletonModule
  ],
  exports: [FooterSectionComponent]
})
export class FooterSectionModule { }
