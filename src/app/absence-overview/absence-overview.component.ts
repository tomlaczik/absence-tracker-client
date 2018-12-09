import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LessonService } from '../lesson.service';
import { Subject } from '../subject';
import { AbsenceService } from '../absence.service';
import { Absence } from '../absence';
import { Lesson } from '../lesson';

@Component({
  selector: 'absence-overview',
  templateUrl: './absence-overview.component.html',
  styleUrls: ['./absence-overview.component.css']
})
export class AbsenceOverviewComponent implements OnInit {

  private absences: Absence[];

  constructor(private absenceService: AbsenceService, private authService: AuthService) { }

  async ngOnInit() {
    this.absences = await this.absenceService.getAll();
  }

  isMyLesson(lesson: Lesson) {
    return this.authService.user.taughtLessons.some(aLesson => aLesson.id === lesson.id);
  }
}
