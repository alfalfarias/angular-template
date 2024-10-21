import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSkeletonComponent } from './footer-skeleton.component';
import { SkeletonModule } from '../skeleton.module';
import { FooterErrorModule } from '../../components/footer-error/footer-error.module';
import { FooterLoadingModule } from '../../components/footer-loading/footer-loading.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [FooterSkeletonComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    FooterModule,
    FooterLoadingModule,
    FooterErrorModule,
  ],
  exports: [FooterSkeletonComponent]
})
export class FooterSkeletonModule { }
