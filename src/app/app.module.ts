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


@NgModule({
  declarations: [
    AppComponent,
    SessionSummaryComponent,
    SessionDetailComponent,
    SessionLearnersSummaryComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    SessionsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(), 
    ReactiveFormsModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
