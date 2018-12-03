import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbsenceListComponent } from "../absence-list/absence-list.component";
import { LessonListComponent } from '../lesson-list/lesson-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lessons',
    pathMatch: 'full'
  },
  {
    path: 'lessons',
    component: LessonListComponent
  },
  {
    path: 'absences',
    component: AbsenceListComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }