import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SessionSummaryComponent } from './sessions/sessionSummary/session-summary.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ProfilComponent } from './profil/profil.component';
import { CreateProfilComponent } from './create-profil/create-profil.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { MySessionComponent } from './my-session/my-session.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions',
    pathMatch: 'full'
  },
  {
    path: 'sessions',
    component: SessionsComponent,
    children: [
      {
        path: 'detailView',
        component: SessionSummaryComponent
        // canLoad: [AuthGuard]
      },
    ]
    // canLoad: [AuthGuard]
  },
  {
    path: 'profil',
    component: ProfilComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'createProfil',
    component: CreateProfilComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'createSession',
    component: CreateSessionComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'mySession',
    component: MySessionComponent
    // canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'Error_404',
    pathMatch: 'full'
  },
  {
    path: 'Error_404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
