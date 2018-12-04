import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFilterComponent } from './lesson-filter.component';

describe('LessonFilterComponent', () => {
  let component: LessonFilterComponent;
  let fixture: ComponentFixture<LessonFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
