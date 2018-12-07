import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { AuthService } from '../auth.service';
import { Subject } from '../subject';
import { Lesson } from '../lesson';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  private filteredSubjects: Subject[];
  private subjects: Subject[];

  constructor(private lessonService: LessonService, private authService: AuthService) {}

  async ngOnInit() {
    this.subjects = await this.lessonService.getAll();
    this.filteredSubjects = this.subjects;
  }

  onFilterChange(data) {
    console.log(this.authService.user);
  }

  isLessonActive(lesson: Lesson) {
    return this.authService.user.activeLessons.some(aLesson => aLesson.id === lesson.id);
  }

  async takeLesson(lesson: Lesson) {
    this.authService.user = await this.lessonService.addUser(lesson, this.authService.user);
  }

  async removeLesson(lesson: Lesson) {
    this.authService.user = await this.lessonService.removeUser(lesson, this.authService.user);
  }

}
