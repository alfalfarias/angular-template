import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ANTENNA_IMAGE_ASSET, LOGO_IMAGE_ASSET } from '../../constants/assets.constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  ANTENNA_IMAGE_ASSET = ANTENNA_IMAGE_ASSET;
  LOGO_IMAGE_ASSET = LOGO_IMAGE_ASSET;

  loginFormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  
  isPasswordVisible = false;

  changePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
