import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLoadingComponent } from './header-loading.component';

@NgModule({
  declarations: [HeaderLoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderLoadingComponent
  ]
})
export class HeaderLoadingModule { }
