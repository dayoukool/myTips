import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSessionsComponent } from './card-sessions.component';

describe('CardSessionsComponent', () => {
  let component: CardSessionsComponent;
  let fixture: ComponentFixture<CardSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
