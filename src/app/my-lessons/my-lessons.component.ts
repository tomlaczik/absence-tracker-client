import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { LessonService } from '../lesson.service';
import { AuthService } from '../auth.service';
import { Lesson } from '../lesson';
import { User } from '../user';
import { Absence } from '../absence';
import { AbsenceService } from '../absence.service';
import { UserService } from '../user.service';

@Component({
  selector: 'my-lessons',
  templateUrl: './my-lessons.component.html',
  styleUrls: ['./my-lessons.component.css']
})
export class MyLessonsComponent implements OnInit {

  private subjects: Subject[];
  private lessonStudents: User[];
  private selectedLesson: Lesson;
  private allStudents: User[];

  constructor(private lessonService: LessonService, private authService: AuthService, private absenceService: AbsenceService, private userService: UserService) {}

  async ngOnInit() {
    this.subjects = await this.lessonService.getAll();
  }

  async clickHandler(lesson : Lesson){
    this.selectedLesson = lesson;
    this.lessonStudents = await this.lessonService.getStudents(lesson);
    this.allStudents = await this.userService.getAll();
  }

  isInLesson(user: User): boolean{
    return this.lessonStudents.some(aUser => aUser.id === user.id);
  }

  async addStudent(user: User){
    await this.lessonService.addUser(this.selectedLesson, user);
  }
  
  async removeStudent(user: User){
    await this.lessonService.removeUser(this.selectedLesson, user);
  }

  isMyLesson(lesson: Lesson): boolean {
    return this.authService.user.taughtLessons.some(aLesson => aLesson.id === lesson.id);
  }

  isAbsenceChecked(student: User, week: number) {
    return student.absences.some(absence => absence.week === week && absence.lesson.id === this.selectedLesson.id);
  }

  async toggleAbsence(student: User, week: number, lesson: Lesson) {
    let index = student.absences.findIndex(absence => absence.week === week && absence.lesson.id === lesson.id);
    if(index === -1) {
      student.absences.push(await this.lessonService.addAbsence(new Absence(week), lesson, student));
    }
    else {
      console.log(student.username, student.absences);
      await this.absenceService.delete(student.absences.splice(index, 1)[0]);
    }
  }

}
