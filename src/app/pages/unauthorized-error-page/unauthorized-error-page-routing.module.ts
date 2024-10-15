import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedErrorPageComponent } from './unauthorized-error-page.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthorizedErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthorizedErrorPageRoutingModule {}
