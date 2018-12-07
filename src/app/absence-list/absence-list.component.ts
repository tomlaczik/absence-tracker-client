import { Component, OnInit } from '@angular/core';
import { AbsenceService } from '../absence.service';
import { AuthService } from '../auth.service';
import { Absence } from '../absence';

enum Role { STUDENT, TEACHER, ADMIN }

@Component({
  selector: 'absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit {

  private absences: Absence[];

  constructor(private absenceService: AbsenceService, private authService: AuthService) { }

  async ngOnInit() {
    if(this.authService.user.role == Role.STUDENT){
      this.absences = await this.absenceService.getSelf(this.authService.user);
    }else{
      this.absences = await this.absenceService.getAll();
    }
    
  }

}
