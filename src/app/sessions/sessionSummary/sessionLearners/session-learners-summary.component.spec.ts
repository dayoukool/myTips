import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLearnersSummaryComponent } from './session-learners-summary.component';

describe('SessionLearnersSummaryComponent', () => {
  let component: SessionLearnersSummaryComponent;
  let fixture: ComponentFixture<SessionLearnersSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLearnersSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLearnersSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
