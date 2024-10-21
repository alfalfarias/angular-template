import { Component } from '@angular/core';
import { Status } from '../../skeleton/skeleton.types';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
  status: Status = Status.SUCCESS;
}
