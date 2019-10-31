import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSujetComponent } from './edit-sujet.component';

describe('EditSujetComponent', () => {
  let component: EditSujetComponent;
  let fixture: ComponentFixture<EditSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
