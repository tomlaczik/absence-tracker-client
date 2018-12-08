import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Absence } from '../absence';
import { LessonService } from '../lesson.service';
import { Subject } from '../subject';

type TableRows = {subject: string, day: string, time: string, absences: number[]}[];

const days: string[] = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];

@Component({
  selector: 'absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit {

  private displayedColumns: Array<String> = ['subject','day','time','1','2','3','4','5','6','7','8','9','10','11','12','sum'];
  private dataSource: TableRows;

  constructor(private userService: UserService, private authService: AuthService, private lessonService: LessonService) { }

  async ngOnInit() {
    let subjects: Subject[];
    let absences: Absence[];

    await Promise.all([
      subjects = await this.lessonService.getAll(),
      absences = await this.userService.getAbsences(this.authService.user)
    ]);

    subjects = subjects
      .filter(subject => {
        subject.lessons = subject.lessons.filter(lesson =>
          this.authService.user.activeLessons.some(aLesson =>
            lesson.id === aLesson.id
          )
        )
        return subject.lessons.length > 0;
      });

    let formattedData: TableRows = [];

    for(let subject of subjects) {
      for(let lesson of subject.lessons) {
        formattedData.push({
          subject: subject.name,
          day: days[lesson.weekday],
          time: lesson.time,
          absences: []
        });
      }
    }

    for(let absence of absences) {
      let index = formattedData.findIndex(row =>
        row.subject === absence.lesson.subject.name &&
        row.day === days[absence.lesson.weekday] &&
        row.time === absence.lesson.time
      );

      if(index !== -1) {
        formattedData[index].absences.push(absence.week);
      }
    }

    this.dataSource = formattedData;
  }

}
