import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SessionSummaryComponent } from './sessions/sessionSummary/session-summary.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ProfilComponent } from './profil/profil.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions',
    pathMatch: 'full'
  },
  {
    path: 'sessions',
    component: SessionsComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'profil',
    component: ProfilComponent
    // canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
