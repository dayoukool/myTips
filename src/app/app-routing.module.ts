import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SessionSummaryComponent } from './sessions/sessionSummary/session-summary.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessionSummary',
    pathMatch: 'full'
  },
  {
    path: 'sessionSummary',
    component: SessionSummaryComponent
    // canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
