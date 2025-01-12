import { Routes } from '@angular/router';
import { HOME_ROUTING, INTERNAL_SERVER_ERROR_ROUTING, LOGIN_ROUTING, UNAUTHORIZED_ERROR_ROUTING } from './app-routes.constants';

export const routes: Routes = [
    {
      path: LOGIN_ROUTING,
      loadChildren: () =>
        import('./pages/login-page/login-page.module').then(
          (m) => m.LoginPageModule
        ),
      resolve: {},
      canLoad: [],
    },
    {
      path: HOME_ROUTING,
      loadChildren: () =>
        import('./pages/home-page/home-page.module').then(
          (m) => m.HomePageModule
        ),
      resolve: {},
      canLoad: [],
    },
    {
      path: UNAUTHORIZED_ERROR_ROUTING,
      loadChildren: () =>
        import(
          './pages/unauthorized-error-page/unauthorized-error-page.module'
        ).then((m) => m.UnauthorizedErrorPageModule),
      resolve: {},
      canLoad: [],
    },
    {
      path: INTERNAL_SERVER_ERROR_ROUTING,
      loadChildren: () =>
        import(
          './pages/internal-server-error-page/internal-server-error-page.module'
        ).then((m) => m.InternalServerErrorPageModule),
      resolve: {},
      canLoad: [],
    },
    {
      path: '**',
      redirectTo: HOME_ROUTING,
      pathMatch: 'full',
    }
];
