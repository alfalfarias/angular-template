import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSkeletonComponent } from './header-skeleton.component';
import { SkeletonModule } from '../skeleton.module';
import { HeaderErrorModule } from '../../components/header-error/header-error.module';
import { HeaderLoadingModule } from '../../components/header-loading/header-loading.module';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [HeaderSkeletonComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    HeaderModule,
    HeaderLoadingModule,
    HeaderErrorModule,
  ],
  exports: [HeaderSkeletonComponent]
})
export class HeaderSkeletonModule { }
