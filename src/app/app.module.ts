import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionSummaryComponent } from './sessions/sessionSummary/session-summary.component';
import { SessionDetailComponent } from './sessions/sessionSummary/sessionDetail/session-detail.component';
import { SessionLearnersSummaryComponent } from './sessions/sessionSummary/sessionLearners/session-learners-summary.component';
import { StarRatingModule } from 'angular-star-rating';
import { DynamicFormComponent } from './dynamicForms/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamicForms/dynamic-form-question.component';
import { SessionsComponent } from './sessions/sessions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { TopicFiltersPipe } from './Pipe/topic-filters.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { NumbersOfCardFiltersPipe } from './Pipe/numbers-of-card-filters.pipe';
import { LevelPipePipe } from './Pipe/level-pipe.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import { FilterDatePipePipe } from './Pipe/filter-date-pipe.pipe';
import { NumberOfResearchPipePipe } from './Pipe/number-of-research-pipe.pipe';

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
    FilterComponent,
    TopicFiltersPipe,
    NumbersOfCardFiltersPipe,
    LevelPipePipe,
    FilterDatePipePipe,
    NumberOfResearchPipePipe
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(),
    ReactiveFormsModule,
    BarRatingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    MatCarouselModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
