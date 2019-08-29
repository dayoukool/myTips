import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLearningComponent } from './module-learning.component';

describe('ModuleLearningComponent', () => {
  let component: ModuleLearningComponent;
  let fixture: ComponentFixture<ModuleLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
