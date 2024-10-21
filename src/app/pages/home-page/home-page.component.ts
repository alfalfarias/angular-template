import { Component } from '@angular/core';
import { ConfigService } from '../../configs/app-initializer-config/app-initializer-config.service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(configService: ConfigService) {
    console.log('config -> ', configService.config);
  }
}
