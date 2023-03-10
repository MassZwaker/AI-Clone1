import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGaurd } from './services/auth-guard.service';
import { LoginComponent } from './components/login-signup/login/login.component';
import { SignupComponent } from './components/login-signup/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  // { path: '', component: LandingComponent },
  { path: '', component: LoginComponent },

  // { path: 'signup', component: SignupComponent },
  {
    path: 'data-driven',
    loadChildren: () => import('./components/data-driven/data-driven.module').then(m => m.DataDrivenModule),
    canActivate: [AuthGaurd]
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }, {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
