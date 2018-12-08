import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbsenceListComponent } from "../absence-list/absence-list.component";
import { LessonListComponent } from '../lesson-list/lesson-list.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';
import { MyLessonsComponent } from '../my-lessons/my-lessons.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lessons',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lessons',
    component: LessonListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'absences',
    component: AbsenceListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mylessons',
    component: MyLessonsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }