import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './header-section.component';
import { HeaderSkeletonModule } from '../../skeleton/header-skeleton/header-skeleton.module';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [HeaderSectionComponent],
  imports: [
    CommonModule,
    HeaderModule,
    HeaderSkeletonModule
  ],
  exports: [HeaderSectionComponent]
})
export class HeaderSectionModule { }
