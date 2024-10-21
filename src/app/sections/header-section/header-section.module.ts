import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderSectionComponent } from './header-section.component';
import { HeaderSkeletonModule } from '../../skeleton/header-skeleton/header-skeleton.module';

@NgModule({
  declarations: [HeaderSectionComponent],
  imports: [
    CommonModule,
    HeaderComponent,
    HeaderSkeletonModule
  ],
  exports: [HeaderSectionComponent]
})
export class HeaderSectionModule { }
