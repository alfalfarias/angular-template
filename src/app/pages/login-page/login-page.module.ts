import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { HeaderSectionModule } from '../../sections/header-section/header-section.module';
import { FooterSectionModule } from '../../sections/footer-section/footer-section.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    HeaderSectionModule,
    FooterSectionModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
