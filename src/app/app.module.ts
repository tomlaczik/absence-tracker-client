import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { RoutingModule } from './routing/routing.module';
import { LessonFilterComponent } from './lesson-filter/lesson-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    AbsenceListComponent,
    LessonFilterComponent,
    LoginComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
