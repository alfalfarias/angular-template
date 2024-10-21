import { Component, Input } from '@angular/core';
import { Status } from '../skeleton.types';

@Component({
  selector: 'app-footer-skeleton',
  templateUrl: './footer-skeleton.component.html',
  styleUrl: './footer-skeleton.component.scss'
})
export class FooterSkeletonComponent {
  @Input() status: Status = Status.LOADING;
}
