import { Component, Input } from '@angular/core';
import { Status } from '../skeleton.types';

@Component({
  selector: 'app-header-skeleton',
  templateUrl: './header-skeleton.component.html',
  styleUrl: './header-skeleton.component.scss'
})
export class HeaderSkeletonComponent {
  @Input() status: Status = Status.LOADING;
}
