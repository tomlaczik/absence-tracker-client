import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { LessonService } from '../lesson.service';
import { AuthService } from '../auth.service';
import { Lesson } from '../lesson';
import { User } from '../user';

@Component({
  selector: 'my-lessons',
  templateUrl: './my-lessons.component.html',
  styleUrls: ['./my-lessons.component.css']
})
export class MyLessonsComponent implements OnInit {

  private subjects: Subject[];
  private lessonStudents: User[];

  constructor(private lessonService: LessonService, private authService: AuthService) {}

  async ngOnInit() {
    this.subjects = await this.lessonService.getAll();
  }

  async clickHandler(lesson : Lesson){
    this.lessonStudents = await this.lessonService.getStudents(lesson);
  }

  isMyLesson(lesson: Lesson) {
    return this.authService.user.taughtLessons.some(aLesson => aLesson.id === lesson.id);
  }

}
