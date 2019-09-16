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
import { CardSessionsComponent, SessionDetail } from './sessions/card-sessions/card-sessions.component';
import { ProfilComponent } from './profil/profil.component';
import { CreateProfilComponent } from './create-profil/create-profil.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CreateSessionComponent } from './create-session/create-session.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MySessionComponent } from './my-session/my-session.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SujetComponent } from './sujet/sujet.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModuleLearningComponent } from './module-learning/module-learning.component';
import { CardModuleComponent } from './card-module/card-module.component';
import { DetailModuleComponent, SessionModal } from './module-learning/detail-module/detail-module.component';

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
    NumberOfResearchPipePipe,
    CardSessionsComponent,
    ProfilComponent,
    CreateProfilComponent,
    CreateSessionComponent,
    MySessionComponent,
    PageNotFoundComponent,
    FooterComponent,
    SessionDetail,
    SujetComponent,
    ModuleLearningComponent,
    CardModuleComponent,
    DetailModuleComponent,
    SessionModal
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
    Ng5SliderModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule
  ],
  entryComponents: [
    SessionModal
  ],
  providers: [MatNativeDateModule, MatDatepickerModule, { provide: MAT_DATE_LOCALE, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
