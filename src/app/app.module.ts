import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatButtonToggleModule } from '@angular/material';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { RoutingModule } from './routing/routing.module';
import { LessonFilterComponent } from './lesson-filter/lesson-filter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    AbsenceListComponent,
    LessonFilterComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
