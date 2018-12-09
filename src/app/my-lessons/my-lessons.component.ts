import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { LessonService } from '../lesson.service';
import { AuthService } from '../auth.service';
import { Lesson } from '../lesson';

@Component({
  selector: 'my-lessons',
  templateUrl: './my-lessons.component.html',
  styleUrls: ['./my-lessons.component.css']
})
export class MyLessonsComponent implements OnInit {

  private subjects: Subject[];
  private selectedLesson: Lesson = null;
  private lessonStudents = [];

  constructor(private lessonService: LessonService, private authService: AuthService) {}

  async ngOnInit() {
    this.subjects = await this.lessonService.getAll();
  }

  clickHandler(lesson : Lesson){
    this.selectedLesson = lesson;
    this.getStudents();
  }

  isMyLesson(lesson: Lesson) {
    return this.authService.user.taughtLessons.some(aLesson => aLesson.id === lesson.id);
  }

  async getStudents(){
    this.lessonStudents = await this.lessonService.getStudents(this.selectedLesson);
  }

}
