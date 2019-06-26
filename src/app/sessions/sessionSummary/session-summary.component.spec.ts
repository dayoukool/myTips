import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSummaryComponent } from './session-summary.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SessionSummaryComponent', () => {
  let component: SessionSummaryComponent;
  let fixture: ComponentFixture<SessionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSummaryComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
