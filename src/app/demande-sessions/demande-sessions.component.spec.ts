import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSessionsComponent } from './demande-sessions.component';

describe('DemandeSessionsComponent', () => {
  let component: DemandeSessionsComponent;
  let fixture: ComponentFixture<DemandeSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
