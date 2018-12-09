import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyLessonsComponent } from './my-lessons/my-lessons.component';
import { AbsenceOverviewComponent } from './absence-overview/absence-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    AbsenceListComponent,
    LoginComponent,
    MyLessonsComponent,
    AbsenceOverviewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
