import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerErrorPageComponent } from './internal-server-error-page.component';

const routes: Routes = [
  {
    path: '',
    component: InternalServerErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalServerErrorPageRoutingModule {}
