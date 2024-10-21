import { Component } from '@angular/core';
import { Status } from '../../skeleton/skeleton.types';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  status: Status = Status.SUCCESS;
}
