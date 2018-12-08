import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonsComponent } from './my-lessons.component';

describe('MyLessonsComponent', () => {
  let component: MyLessonsComponent;
  let fixture: ComponentFixture<MyLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
