import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { BarRatingModule } from "ngx-bar-rating";
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionSummaryComponent } from './sessions/sessionSummary/session-summary.component';
import { SessionDetailComponent } from './sessions/sessionSummary/sessionDetail/session-detail.component';
import { SessionLearnersSummaryComponent } from './sessions/sessionSummary/sessionLearners/session-learners-summary.component';
import { StarRatingModule } from 'angular-star-rating';
import { DynamicFormComponent  } from './dynamicForms/dynamic-form.component';
import { DynamicFormQuestionComponent  } from './dynamicForms/dynamic-form-question.component';
import { SessionsComponent } from './sessions/sessions.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    SessionSummaryComponent,
    SessionDetailComponent,
    SessionLearnersSummaryComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    SessionsComponent,
    HeaderComponent,
    FilterComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(),
    ReactiveFormsModule,
    BarRatingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    MatCarouselModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
