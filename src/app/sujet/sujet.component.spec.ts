import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetComponent } from './sujet.component';

describe('SujetComponent', () => {
  let component: SujetComponent;
  let fixture: ComponentFixture<SujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
