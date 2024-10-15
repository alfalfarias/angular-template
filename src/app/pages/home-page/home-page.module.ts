import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FooterSectionModule } from '../../sections/footer-section/footer-section.module';
import { HeaderSectionModule } from '../../sections/header-section/header-section.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderSectionModule,
    FooterSectionModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
