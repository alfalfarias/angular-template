import { Component, Input } from '@angular/core';
import { Status } from './skeleton.types';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  STATUS = Status;

  @Input() 
  status: Status = Status.LOADING;
}
